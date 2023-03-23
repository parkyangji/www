var products = new XMLHttpRequest();

products.onload = function() {
    var productsJson = JSON.parse(products.responseText);
    
    var creatHtml = '';
    var modalimg = '';
    var modalText = '';
    var modalTable = '';

    
    for (var i=0; i<productsJson.gas.length; i++) {
        creatHtml += `<li>
                        <a href="#" id="click">
                            <img src="./images/content2/${productsJson.gas[i].img}" alt="제품이미지">
                            <span class="name">${productsJson.gas[i].name}</span>
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

                modalimg += `<img src="./images/content2/${productsJson.gas[i].img}" alt="제품이미지">`
                modalText += `
                            <li>
                                <dl>
                                    <dt>제품명</dt>
                                    <dd class="name">${productsJson.gas[i].name}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>용도</dt>
                                    <dd>${productsJson.gas[i].applicaton}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                <dt>PACKING</dt>
                                <dd>${productsJson.gas[i].packing}</dd>
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

                for(var j=0; j<productsJson.gas[i].spec_1.length; j++) {

                    modalTable +=
                            `<tr>
                                <td>${productsJson.gas[i].spec_1[j]}</td>
                                <td>${productsJson.gas[i].spec_2[j]}</td>
                                <td>${productsJson.gas[i].spec_3[j]}</td>
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

products.open('GET', './js/sub2_2.json', true);  
products.send(null);

