import "jquery/dist/jquery";
import "popper.js/dist/umd/popper";
import "daterangepicker/moment.min.js";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/carousel";

import "select2/dist/js/select2.full";
import "daterangepicker/daterangepicker";
import "owl.carousel/dist/owl.carousel";
// import WOW from "wowjs/dist/wow.js";

import "../vendors.css";

import "../scss/style.scss";

/*
// W3school ajax in their server
const btn = document.getElementById("btn");
const demo = document.getElementById("demo");

btn.addEventListener("click", function () {
    const loadDoc = function (url, cFun) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // code
                cFun(xhttp);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    };

    const doc1 = function (xhttp) {
        demo.innerHTML = xhttp.responseText;
    };
    const doc2 = function (xhttp) {
        demo.innerHTML = xhttp.responseText;
    };

    loadDoc("https://jsonplaceholder.typicode.com/comments", doc1);
    // loadDoc('demo_get.asp', doc2);
});
*/

// https://jsonplaceholder.typicode.com/comments

const apiHTML = document.querySelector(".api-tr");

const xHttp = new XMLHttpRequest();
xHttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    api1(this.response);
  }
};
xHttp.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
xHttp.send();

const api1 = function (res) {
  let dataHalf = JSON.parse(res);

  const state = {
    page: 1,
    rows: 6,
    btnNum: 7, // must be ODD number
  };
  state.quarySet = dataHalf;

  const pagination = function (querySet, page, rows) {
    const trimStart = (page - 1) * rows;
    const trimEnd = trimStart + rows;

    const trimmedData = querySet.slice(trimStart, trimEnd);
    const pages = Math.ceil(querySet.length / rows);

    return {
      querySet: trimmedData,
      pages: pages,
    };
  };

  const paginationBtn = function (pages) {
    const paginationWrapper = document.querySelector(".my-pagination");
    paginationWrapper.innerHTML = "";

    let maxLeft = state.page - Math.floor(state.btnNum / 2);
    let maxRight = state.page + Math.floor(state.btnNum / 2);

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = state.btnNum;
    }
    if (maxRight > pages) {
      maxLeft = pages - (state.btnNum - 1);
      maxRight = pages;

      if (maxLeft < 1) {
        maxLeft = 1;
      }
    }

    for (let i = maxLeft; i <= maxRight; i++) {
      const paginationItem = `<li class="page-item"><button value="${i}" class="btn btn--default pagination-btn">${i}</button></li>`;
      paginationWrapper.insertAdjacentHTML("beforeend", paginationItem);
    }

    const prevBtn = `<li class="page-item"><button value="${
      state.page - 1
    }" class="btn btn--default pagination-btn">prev</button></li>`;
    paginationWrapper.insertAdjacentHTML("afterbegin", prevBtn);

    const nextBtn = `<li class="page-item"><button value="${
      state.page + 1
    }" class="btn btn--default pagination-btn">nxt</button></li>`;
    paginationWrapper.insertAdjacentHTML("beforeend", nextBtn);

    if (state.page !== 1) {
      const firstBtn = `<li class="page-item"><button value="${1}" class="btn btn--default pagination-btn">&#171; First</button></li>`;
      paginationWrapper.insertAdjacentHTML("afterbegin", firstBtn);
    }
    if (state.page !== pages) {
      const lastBtn = `<li class="page-item"><button value="${pages}" class="btn btn--default pagination-btn">Last &#187;</button></li>`;
      paginationWrapper.insertAdjacentHTML("beforeend", lastBtn);
    }

    const paginationBs = document.querySelectorAll(".pagination-btn");

    for (let j = 0; j < paginationBs.length; j++) {
      paginationBs[j].addEventListener("click", function () {
        apiHTML.innerHTML = " ";
        state.page = Number(this.value);
        apiBuild();
      });
    }
    document.querySelector(`[value='${state.page}']`).classList.add("active");
  };

  const apiBuild = function () {
    const dataArr = pagination(state.quarySet, state.page, state.rows);
    const myList = dataArr.querySet;

    for (let i in myList) {
      let templateHtml = `
                <div class="col-lg-6">
                    <div class="item item--type1">
                        <div class="item__img">
                            <img src="./src/media/item01.jpg" alt="restaurant">
                        </div>
                        <div class="item__dis">
                            <h6 class="sub-title item__name">${myList[i].name}</h6>
                            <h2 class="primary-title item__email">${myList[i].email}</h2>
                            <h2 class="primary-title item__email">${myList[i].id}</h2>
                            <p class="item__body">${myList[i].body}</p>
                        </div>
                        <div class="item__link">
                            <a href="#" class="btn btn--squared btn--default">
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
      apiHTML.insertAdjacentHTML("beforeend", templateHtml);
    }
    paginationBtn(dataArr.pages);
  };

  apiBuild();
};

const zxz = 23;
console.log(zxz);

$(".owl-carousel--type1").owlCarousel({
  nav: true,
  dots: false,
  items: 4,
  margin: 15,
  // animateOut: 'slideOutDown',
  // animateIn:'flipInX'
});

$(".owl-carousel--type2").owlCarousel({
  nav: true,
  dots: false,
  items: 5,
  margin: 0,
  // animateOut: 'slideOutDown',
  // animateIn:'flipInX'
});

var carousel1 = $("#forControls02").carousel();
var carousel2 = $("#forControls03").carousel();
carousel1.on("slide.bs.carousel", function (event) {
  var to = $(event.relatedTarget).index();
  carousel2.carousel(to);
});

// new WOW().init();

$(function () {
  $('input[name="datePicker"]').daterangepicker({
    singleDatePicker: true,
    autoApply: true,
    autoUpdateInput: false,
  });
});
