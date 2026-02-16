export default function Vision() {
  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 p-4 p-md-5">
        <h2 className="text-center mb-4">Mission and Vision</h2>
        <p className="mb-4">
          The vision of the Model School is to provide quality education to meritorious rural youth deprived of this opportunity, through an innovative blend of modern computer-assisted, learner-centric instructional methodology along with rigorous traditional teaching in a world-class ambiance. This vision is driven by the main causes that most of the talented rural youth wishing to pursue higher education.
        </p>
        <h4 className="mb-3">Model schools are envisioned for:</h4>
        <ul className="list-unstyled">
          {[
            'To play a pace-setting role in EBBC.',
            'To provide free English medium education from 6th to Intermediate level.',
            'To provide holistic education through curricular and co-curricular activities to the students.',
            'To assess and monitor student learning by implementing Continuous Comprehensive Evaluation (CCE).',
            "To sustain the girls' enrollment by providing a “Girls hostel” with a capacity of 100 students.",
            'Learn by Doing - scent of the sand and touch of the soil.',
            'To conduct scholastic and co-scholastic competitions in all areas to develop a healthy competitive environment.',
            'To restructure the existing institutional values and norms from time to time and adapt to the ever-changing global scenario.',
            'Our students as pace setters in changing the face of rural India becoming harbingers of growth.',
            'To encourage students to think out of the box and pursue solution-based research in Agriculture, Science, and Technology.',
            'Vocational Education: The school also imparts vocational training in IT and Beauty and Wellness from 9th to intermediate level.',
            'Model schools stress upon competitive exams like NEET, EAMCET, by providing proper training from time to time.',
          ].map((item, i) => (
            <li key={i} className="mb-2">• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
