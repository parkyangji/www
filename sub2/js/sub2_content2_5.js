var key, value;

function getParams() {
    var url = decodeURIComponent(location.href);
    url = decodeURIComponent(url); // http://127.0.0.1:5500/sub2/sub2_2.htm

    var params = '';
    params = url.substring(url.indexOf("_")+1, url.indexOf("_")+2)

    return params;
}

var pageNum = getParams(); // 페이지 수 뽑기 
var products = new XMLHttpRequest();

products.onload = function() {
    var productsJson = JSON.parse(products.responseText);
    var currentKey = Object.entries(productsJson); // 객체 => 배열
    
    var creatHtml = '';
    var modalimg = '';
    var modalText = '';
    var modalTable = '';

    //pageNum과 일치하는 데이터를 찾아옴
    for (var i=0; i<currentKey[pageNum-2][1].length; i++) {
        creatHtml += `<li>
                        <a href="#" id="click">
                            <img src="./images/content${pageNum}/${currentKey[pageNum-2][1][i].img}" alt="제품이미지">
                            <span class="name">${currentKey[pageNum-2][1][i].name}</span>
                            <span class="more">자세히보기</span>
                        </a>
                    </li>`
    }

    document.getElementById('product_list').innerHTML = creatHtml;

    
    var thisClick = document.querySelectorAll('#click');
    var modal_box = document.querySelector('.modal_box');
    var modal_content = document.querySelector('.modal_content');
    var close_btn = document.getElementById('close_btn');

    thisClick.forEach(function(a, i){
        
        a.addEventListener('click', function(e){
                e.preventDefault();

                modal_box.style.display = "block";
                modal_content.style.display = "block"

                modalimg += `<img src="./images/content${pageNum}/${currentKey[pageNum-2][1][i].img}" alt="제품이미지">`
                modalText += `
                            <li>
                                <dl>
                                    <dt>제품명</dt>
                                    <dd class="name">${currentKey[pageNum-2][1][i].name}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>용도</dt>
                                    <dd>${currentKey[pageNum-2][1][i].applicaton}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                <dt>PACKING</dt>
                                <dd>${currentKey[pageNum-2][1][i].packing}</dd>
                                </dl>
                            </li>`
                modalTable += `
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th>단위</th>
                                <th>규격</th>
                            </tr>
                            </thead>
                            <tbody>`

                for(var j=0; j<currentKey[pageNum-2][1][i].spec_1.length; j++) {

                    modalTable +=
                            `<tr>
                                <td>${currentKey[pageNum-2][1][i].spec_1[j]}</td>
                                <td>${currentKey[pageNum-2][1][i].spec_2[j]}</td>
                                <td>${currentKey[pageNum-2][1][i].spec_3[j]}</td>
                            </tr>`
                }
                            
                modalTable += `</tbody>`


                    document.querySelector('.img_inner').innerHTML = modalimg;
                    document.querySelector('.conduct_info').innerHTML = modalText;
                    document.querySelector('.spec_table').innerHTML = modalTable;

                    modalimg = '', modalText = '', modalTable = '';
            })
    });


    modal_box.addEventListener('click', function(e){
        e.preventDefault();
        modal_box.style.display = "none";
        modal_content.style.display = "none"
    });

    close_btn.addEventListener('click', function(e){
        e.preventDefault();
        modal_box.style.display = "none";
        modal_content.style.display = "none"
    });
             
}

products.open('GET', './js/product_data.json', true);  
products.send(null);

