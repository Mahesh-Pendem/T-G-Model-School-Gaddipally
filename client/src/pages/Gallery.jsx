import { useState } from 'react';

const IMAGE_NAMES = [];
for (let i = 2; i <= 44; i++) IMAGE_NAMES.push(`${i}.jpg`);

function GalleryImage({ src, alt, index }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className="img-fluid rounded shadow"
          style={{ width: '100%', height: '220px', objectFit: 'cover' }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="rounded shadow d-flex align-items-center justify-content-center bg-light text-muted border"
          style={{ width: '100%', height: '220px' }}
        >
          <span className="small">Image {index + 1}</span>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">TGMS Gallery</h2>
      <div className="row g-3">
        {IMAGE_NAMES.map((name, i) => (
          <GalleryImage
            key={name}
            src={`/images/${name}`}
            alt={`Gallery ${i + 1}`}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
