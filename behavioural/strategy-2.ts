// strategy for image filters
// blackAndWhite, vivid, highContrast -> three strategires
interface IImageFilter {
    apply(image: any): void;
}

class ImageFilter {
    filter!: IImageFilter;

    constructor(private image: string) { }

    setFilterStrategy(filter: IImageFilter) {
        this.filter = filter;
    }

    applyFilter() {
        this.filter.apply(this.image);
    }
}

class BlackAndWhiteFilter implements IImageFilter {
    apply(image: string) {
        console.log('Black and White filter is applied on the image: ', image);
    }
}

class VividFilter implements IImageFilter {
    filterName = 'Vivid';
    apply(image: string) {
        console.log('Vivid filtre is applied on the image: ', image);
    }
}

class HighConrastFilter implements IImageFilter {
    filterName = 'High Contrast';
    apply(image: string) {
        console.log('High Contrast filter is applied on the image: ', image);
    }
}

// create the image filter object
const imageFilter = new ImageFilter('profile-pic.png');

// create instances of all the available filter
const blackAndWhite = new BlackAndWhiteFilter();
const vivid = new VividFilter();
const highContrast = new HighConrastFilter();

// set the filter on image
imageFilter.setFilterStrategy(blackAndWhite);

imageFilter.applyFilter();

// change the filter on the image
imageFilter.setFilterStrategy(vivid);
imageFilter.applyFilter();

// change the filter to high contrast
imageFilter.setFilterStrategy(highContrast);
imageFilter.applyFilter();