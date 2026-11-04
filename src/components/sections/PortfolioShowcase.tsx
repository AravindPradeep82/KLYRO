
import "./PortfolioShowcase.css";

const imageModules = import.meta.glob(
  "../../assets/images/*.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

const squareImages = allImages.slice(0, 12);
const portraitImages = allImages.slice(12, 17);
const storyImages = allImages.slice(17, 21);

type ImageGridProps = {
  images: string[];
  label: string;
};

function ImageGrid({ images, label }: ImageGridProps) {
  return (
    <div className="portfolio-group">
      <h3>{label}</h3>

      <div className="portfolio-grid">
        {images.map((image, index) => (
          <div className="portfolio-image" key={image}>
            <img
              src={image}
              alt={`KLYRO creative artwork ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioShowcase() {
  return (
    <section className="portfolio-section" id="work">
      <div className="portfolio-heading">
        <p className="eyebrow">SELECTED CREATIVE WORK</p>
        <h2>Ideas, made visible.</h2>
        <p>
          A collection of visual explorations and brand communication concepts.
        </p>
      </div>

      <ImageGrid
        images={squareImages}
        label="Square Artwork"
      />

      <ImageGrid
        images={portraitImages}
        label="Portrait Artwork"
      />

      <ImageGrid
        images={storyImages}
        label="Story Format Artwork"
      />
    </section>
  );
}

