import { romanize } from './scripts';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(() => {
  $('#form1').submit(e => {
    e.preventDefault();
    var input = $("#input").val();
    var out = romanize(input);
    $('#show-num').html(`<h2>${out}</h2>`);
    $("#show-num").slideToggle('.no-show');
  });
});