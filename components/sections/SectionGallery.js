import Container from '../Container'

export default function SectionGallery() {
  return (
    <>
      <Container>
        <div id="gallery">
          <div className="galleryWindow">
            <div className="galleryContainer">
              <img src="https://images.contentful.com/iyieuwr67lde/49MVQKj6Ra0sq8OWOqmCqO/83d774d1c0f9cb227fae340ec7f501d6/gallery_01.jpg" />
              <img src="https://images.contentful.com/iyieuwr67lde/WPqt2lBBAc6s4YSSguGsE/1be2af84eda0d15d87bc88413c65c385/gallery_02.jpg" />
              <img src="https://images.contentful.com/iyieuwr67lde/2wlodIL5GMMQyKW0cESUCI/4f4295057f0a6affba2262cab1f58aa2/gallery_03.jpg" />
              <img src="https://images.contentful.com/iyieuwr67lde/43ekztl5KMyC6AqWUC2uk2/fabcfcd1048d5c90098aec52cac959f0/gallery_11.jpg" />
              <img src="https://images.contentful.com/iyieuwr67lde/4qWqvwn8n6Uca6yCQYWaOa/38ddf2880b8dd202c1e5435f08956d39/gallery_04.jpg" />
              <img src="https://images.contentful.com/iyieuwr67lde/2OXGIWB8KQC4m2muyq2C4Y/ebbeffd13709fcd29dc2479304538fba/gallery_05.jpg" />
              <img src="https://images.contentful.com/iyieuwr67lde/2hYUOtID0cI6yqSmUECY6i/f1e310fd981e3e76cdc34d48934be122/gallery_06.jpg" />
              <img src="https://images.contentful.com/iyieuwr67lde/43h6PafNosSi2e4ikOkOMC/2918df62dd1adad607fb017a02f81ee3/gallery_07.jpg" />
              <img src="https://images.contentful.com/iyieuwr67lde/5ynPbD8NbOGYaG6QsWmsMy/7f52dc89543423deaa5219a58756d2a7/gallery_08.jpg" />
            </div>
          </div>
          <figcaption>Photos by Ryan Jenkis</figcaption>
        </div>
      </Container>
      <style jsx>{`
        #gallery {
          height: 215px;
        }

        #gallery {
          padding: 30px 15px;
          border-bottom: 1px solid #e2e2e2;
        }
        @media screen and (min-width: 1024px) {
          #gallery {
            padding: 70px 0;
          }
        }

        .galleryWindow {
          width: 100vw;
          height: 150px;
          position: absolute;
          left: 0;
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
        }

        .galleryContainer {
          width: 5000px;
          padding: 0 15px;
        }

        #gallery img {
          float: left;
          width: 225px;
          height: 150px;
          margin-right: 15px;
        }

        #gallery figcaption {
          margin-top: 160px;
        }

        @media screen and (min-width: 720px) {
          #gallery {
            height: 440px;
          }
          .galleryWindow {
            height: 300px;
          }
          .galleryContainer {
            padding: 0 30px;
          }
          #gallery img {
            width: 450px;
            height: 300px;
          }
          #gallery figcaption {
            margin-top: 310px;
          }
        }
      `}</style>
    </>
  )
}
