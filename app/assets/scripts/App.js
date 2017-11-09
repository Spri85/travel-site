import MobileMenu from './modules/MobileMenu';
import RevalOnScroll from './modules/RevalOnScroll';
import $ from 'jquery';

var mobilemenunew = new MobileMenu();
new RevalOnScroll($(".feature-item"), '85%');
new RevalOnScroll($(".testimonial"), "70%");