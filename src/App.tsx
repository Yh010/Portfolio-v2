function App() {
  return (
    <div className="h-screen">
      {/* 
      blogs
      projects
      experience
      contact me
      resume
      achievements
       */}
      <div className="columns-1 md:columns-3">
        <div>col1</div>
        <div className="pt-12">
          <div className="flex justify-between">
            <div className="font-sans font-semi-bold text-lg">Yash Hegde</div>
            <div className="flex space-x-4 font-thin">
              <div>Contact Me</div>
              <a
                className="after:content-['_↗'] ..."
                href="https://drive.google.com/file/d/1mLEgEQslrW-JjZPKWW7ieLjqcCu2eF7B/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div>col3</div>
      </div>
    </div>
  );
}

export default App;
