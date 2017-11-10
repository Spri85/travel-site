import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevalOnScroll from './modules/RevalOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobilemenunew = new MobileMenu();
new RevalOnScroll($(".feature-item"), '85%');
new RevalOnScroll($(".testimonial"), "70%");
var stickyHeader = new StickyHeader;
var modal = new Modal();