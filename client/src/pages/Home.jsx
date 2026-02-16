export default function Home() {
  return (
    <>
      <p className="font text-center my-2" style={{ fontSize: '1.1rem' }}>
        <marquee behavior="" direction="left">Welcome to T G Model School Gaddipally</marquee>
      </p>
      <div className="container-fluid p-0">
        <img src="/images/TGMS.jpg" alt="T G Model School" width="100%" style={{ maxHeight: '70vh', objectFit: 'cover' }} />
      </div>
    </>
  );
}
