import BandGallerySection from "../../components/library/BandGallerySection"
import BandVideoListSection from "../../components/library/BandVideoListSection"
import MusicCategorySection from "../../components/library/MusicCategorySection"
import Breadcrumb from '../../components/common/Breadcrumb'
const Library = () => {
  return (
    <div className="mt-10 ">
      <Breadcrumb
                title="Thư viện"
                image="https://res.cloudinary.com/dttqah17o/image/upload/v1760690366/about-bg_titybb.jpg"
        />
    <div className="relative container mx-auto px-4 md:px-0 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <MusicCategorySection/>
        </div>

        {/* Video + Gallery */}
        <div className="md:col-span-3 space-y-8">
          <BandVideoListSection/>
        </div>
      </div>
          <BandGallerySection/>
    </div>
    </div>
  );
}

export default Library