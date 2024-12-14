var ImageFilter = /** @class */ (function () {
    function ImageFilter(image) {
        this.image = image;
    }
    ImageFilter.prototype.setFilterStrategy = function (filter) {
        this.filter = filter;
    };
    ImageFilter.prototype.applyFilter = function () {
        this.filter.apply(this.image);
    };
    return ImageFilter;
}());
var BlackAndWhiteFilter = /** @class */ (function () {
    function BlackAndWhiteFilter() {
    }
    BlackAndWhiteFilter.prototype.apply = function (image) {
        console.log('Black and White filter is applied on the image: ', image);
    };
    return BlackAndWhiteFilter;
}());
var VividFilter = /** @class */ (function () {
    function VividFilter() {
        this.filterName = 'Vivid';
    }
    VividFilter.prototype.apply = function (image) {
        console.log('Vivid filtre is applied on the image: ', image);
    };
    return VividFilter;
}());
var HighConrastFilter = /** @class */ (function () {
    function HighConrastFilter() {
        this.filterName = 'High Contrast';
    }
    HighConrastFilter.prototype.apply = function (image) {
        console.log('High Contrast filter is applied on the image: ', image);
    };
    return HighConrastFilter;
}());
// create the image filter object
var imageFilter = new ImageFilter('profile-pic.png');
// create instances of all the available filter
var blackAndWhite = new BlackAndWhiteFilter();
var vivid = new VividFilter();
var highContrast = new HighConrastFilter();
// set the filter on image
imageFilter.setFilterStrategy(blackAndWhite);
imageFilter.applyFilter();
// change the filter on the image
imageFilter.setFilterStrategy(vivid);
imageFilter.applyFilter();
// change the filter to high contrast
imageFilter.setFilterStrategy(highContrast);
imageFilter.applyFilter();
