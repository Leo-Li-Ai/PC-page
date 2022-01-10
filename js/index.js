(function () {
    //弹出视频
    var playBtn = document.querySelector('#section1 .play'),
        dialog = document.querySelector('.dialog'),
        shadow = document.querySelector('.shadow'),
        closeBtn = document.querySelector('.closeBtn'),
        movie = document.querySelector('.movie'),
        movieInner = movie.innerHTML; //存储视频

    playBtn.onclick = function () {
        dialog.style.display = shadow.style.display = 'block';
        movie.innerHTML = movieInner;
    };

    closeBtn.onclick = function () {
        dialog.style.display = shadow.style.display = 'none';
        movie.innerHTML = '';
    }
})();

//选项卡
(function () {
    function tab(btn, content) {
        var btns = btn.children;
        var cons = content.children;

        for (var i = 0; i < btns.length; i++) {
            btns[i].index = i;
            btns[i].onclick = function () {
                for (var i = 0; i < btns.length; i++) {
                    btns[i].classList.remove('active');
                    cons[i].classList.remove('active');
                }

                this.classList.add('active');
                cons[this.index].classList.add('active');
            }
        }
    }


    var tabBtn = document.querySelectorAll('.tabBtn');
    var tabContent = document.querySelectorAll('.tabContent'); 

    for (var i = 0; i < tabBtn.length; i++) {
        tab(tabBtn[i], tabContent[i]);
    }
})();


//轮播图
(function () {
    function carousel(id) {
        var wrap = document.querySelector(id + ' .wrap'),
            ul = document.querySelector(id + ' ul'),
            prev = document.querySelector(id + ' .prev'),
            next = document.querySelector(id + ' .next'),
            circles = document.querySelectorAll(id + ' .circle span'),
            boxWidth = wrap.offsetWidth;

        
        ul.innerHTML += ul.innerHTML;
        var len = ul.children.length;
        ul.style.width = len * boxWidth + 'px';

        var cn = 0; 
        var ln = 0; 

        next.onclick = function () {
            cn++;
            move();
        }
        prev.onclick = function () {
            if (cn == 0) {
                cn = len / 2;
                ul.style.transition = '';
                ul.style.transform = 'translateX(' + -cn * boxWidth + 'px)';
            }

            setTimeout(function () {
                cn--;
                move();
            }, 13);
        }


        function move() {
            ul.style.transition = '.3s';
            ul.style.transform = 'translateX(' + -cn * boxWidth + 'px)';

            var hn = cn % (len / 2);
            circles[ln].className = '';
            circles[hn].className = 'active';

            ln = hn;  //当前次的点击相对于下次点击，它是上一次
        }

        ul.addEventListener('transitionend', function () {
            //这个事件会在transition过渡完成后触发
            if (cn == len / 2) {
                cn = 0;
                ul.style.transition = '';
                ul.style.transform = 'translateX(' + -cn * boxWidth + 'px)';
            }
        })
    }

    carousel('#section3');
    carousel('#section5');
})();

(function () {
    var section4 = document.querySelector('#section4');
    var lis = document.querySelectorAll('#section4 li');
    var bottom = document.querySelector('#section4 .bottom');
    var ln = 0;

    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');

                section4.style.background = 'url(images/section4_big_0' + (this.index + 1) + '.png) no-repeat center top';
                bottom.style.background = 'url(images/section4_big_0' + (this.index + 1) + '_bottom.png) no-repeat center top';
            }

            this.classList.add('active');

        }
    }
})();

//手风琴
(function () {
    var lis = document.querySelectorAll('#section7 ul li');
    var ln = 0;

    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');

            }

            this.classList.add('active');
        }
    }
})();

(function(){
    var ul=document.querySelector('#section8 ul'),
        //lis=document.querySelectorAll('#section8 ul li'),
        lis=ul.children,
        prev=document.querySelector('#section8 .prev'),
        next=document.querySelector('#section8 .next'),
        spans=document.querySelectorAll('#section8 .circle span'),
        cn=0,
        ln=0;


    next.onclick=function(){
        cn++;
        ul.appendChild(lis[0]);

        spans[ln].className='';
        spans[cn].className='active';

        ln=cn;
    }
})();

