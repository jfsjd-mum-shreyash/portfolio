let btnMenu = document.querySelector('.toggle-btn'),
    menu = document.querySelector('nav'),
    header = document.querySelector('header'),
    statisticSection = document.querySelector('#statistic'),
    statisticNum = document.querySelectorAll('.counter-box h3'),
    started = false,
    skillSection = document.querySelector('#skills'),
    progress = document.querySelectorAll('.progress .progress-bar'),
    spans = document.querySelectorAll('.progress-title span'),
    filterProfile = document.querySelectorAll('.portfolio-filter ul li'),
    sections = document.querySelectorAll('section'),
    navLi = document.querySelectorAll('.navbar li a');

/*Hamburger menu button*/
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    btnMenu.classList.toggle('active');
});

/*Active Header On Scroll*/
window.addEventListener('scroll', () => {
    if (scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

/*Statistic Counter*/
function startCount(el) {
    let goal = el.dataset.count;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

window.addEventListener('scroll', () => {
    if (window.scrollY >= statisticSection.offsetTop - 500) {
        if (!started) {
            statisticNum.forEach((num) => startCount(num));
        }
        started = true;
    }
});

/*Skill Progress Bar*/
window.addEventListener('scroll', () => {
    if (window.scrollY >= skillSection.offsetTop - 100) {
        progress.forEach((prog) => {
            prog.style.width = prog.dataset.width;
        });
        spans.forEach((span) => {
            span.style.left = span.dataset.num;
            span.style.opacity = '1';
            span.style.visibility = 'visible';
        });
    }
});

/*Filter Portfolio*/
filterProfile.forEach((li) => {
    li.addEventListener('click', () => {
        filterProfile.forEach((li) => {
            li.classList.remove('current');
        });
        li.classList.add('current');
    });
});

let mixerPortfolio = mixitup('.portfolio-list', {
    selectors: {
        target: '.box'
    },
    animation: {
        duration: 300
    }
});

/*Testimonial Slider With Bullet Points*/
let swiper = new Swiper(".testimonials-container", {
    spaceBetween: 30,
    Loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*ScrollBar And Scroll Section Active*/
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.dataset.link == current) {
            li.classList.add('active');
        }
    });
});

// Handlebars
const source =this.document.getElementById('view').innerHTML
 
const bt1 =this.document.getElementById('send')
 bt1.addEventListener('click', after);

 function after()
 {
    const template = Handlebars.compile(source);
     var v1 = document.getElementById('name').value;

     const replacement = {};
     replacement.Name = v1;
     const compiledHtml = template(replacement);
    const displayGoals = document.getElementById('message');
    displayGoals.innerHTML = compiledHtml;
 }


 // mail
 function SendMail() {
    const params = {
        name : document.getElementById("Name").value,
        mail : document.getElementById("Sender").value,
        number : document.getElementById("Number").value,
        subject : document.getElementById("Subject").value,
        message :document.getElementById("Message").value

 }
 emailjs.send("service_imkwdx3", "template_djsd28g", params).then(function(res){
    
    alert("Success! Message has been sent Shreyash"  +res.status )
 })
};




// social
// $(document).ready(function() {
//     $("#aa1").click(function() {
//       $("#sociallist").toggleClass("remove");
//       $(".btnopenclose").toggleClass("as_selected");
//     });
//   });
  

// slider

let xOffset = 0;
let isMouseIn = false;
const slides = document.getElementById("slides");

setInterval(translate, 0);

function translate() {
  let offsetIncrementor = isMouseIn ? 0.05 : 0.2;
  if (xOffset >= 258 * 7) xOffset = 0;
  else xOffset = xOffset + offsetIncrementor;
  slides.style.transform = "translateX(-" + xOffset + "px)";
}

slides.addEventListener("mouseover", function (event) {
  isMouseIn = true;
});

slides.addEventListener("mouseout", function (event) {
  isMouseIn = false;
});


// download file

let btnDownload = document.querySelector("button");
btnDownload.addEventListener("click", startDownload);
async function startDownload() {
  let url = "files/Shreyash_khobragade_7020153030-jfsjd-.pdf";
  let fileName = "shreyash_khobragade_7020153030";
  const res = await fetch(url);
  const blob = await res.blob();
  saveAs(blob, fileName);
}

                                    function showAlert() {
                                    alert("Thanks for Downloading.! ");
                                    }
                                