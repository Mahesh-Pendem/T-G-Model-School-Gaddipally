export default function About() {
  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 p-4 p-md-5">
        <h1 className="text-center mb-4">About TGMS GADDIPALLY</h1>
        <p>
          TGMS GADDIPALLY was established in 2013 and is managed by the Department of Education. Located in a rural area in the GARIDEPALLY block of the SURYAPET district of Telangana, the school caters to grades 6 through 12. It is co-educational and does not include a pre-primary section. As a model school, it operates in a single shift, with English as the medium of instruction. The academic session begins in April.
        </p>
        <div className="mt-4">
          <h2 className="h5 text-primary mb-3">Facilities</h2>
          <ul className="list-unstyled">
            {[
              'Government building with 6 classrooms for instructional purposes, all in good condition.',
              '2 additional rooms for non-teaching activities.',
              'Separate room for the Headmaster/Teacher.',
              'No boundary wall.',
              'Electric connection available.',
              'Functional well as the source of drinking water.',
              "10 functional boys' toilets and 10 functional girls' toilets.",
              'Playground available.',
              'Library with 100 books.',
              '8 functional computers for teaching and learning purposes.',
              'Mid-day meal provided and prepared on school premises.',
            ].map((item, i) => (
              <li key={i} className="mb-2">• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
