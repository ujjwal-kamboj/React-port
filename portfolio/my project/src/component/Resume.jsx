import React from 'react'

function SkillBar({ name, percent }) {
  return (
    <div className="mb-4">
      <p className="text-sm mb-1">{name}</p>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (

  <section className="min-h-screen bg-gray-900 text-white px-10 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        
        <div>
          <h2 className="text-xl font-bold mb-6">Software Skills</h2>

          <SkillBar name="HTML" percent={80} />
          <SkillBar name="CSS" percent={85} />
          <SkillBar name="JAVA" percent={80} />
          <SkillBar name="React JS" percent={70} />
          <SkillBar name="C/C++" percent={75} />

          <h2 className="text-xl font-bold mt-10 mb-4">Languages</h2>

          <SkillBar name="English" percent={95} />
          <SkillBar name="Hindi" percent={70} />
        
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">Project</h2>

          <div className="mb-6">
            <p className="font-semibold">Portfolio Website</p>
            <p className="text-gray-400 text-sm">
              Created using React  & Tailwind CSS
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">ATM Interface UI</p>
            <p className="text-gray-400 text-sm">
              Designed using HTML, CSS, and JavaScript
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Student Management System </p>
            <p className="text-gray-400 text-sm">
             Developed in C++
            </p>
          </div>

          

          <h2 className="text-xl font-bold mt-22 mb-4">Education</h2>

          <p className="text-gray-400">
           Bachelor of  Computer Application (BCA) <br />
           Kurukshetra University 
          </p>
        </div>

  
        <div>
          <h2 className="text-xl font-bold mb-6">What Can I Do?</h2>

          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>Frontend Design</li>
            <li>Responsive Layouts</li>
            <li>Basic Backend Logic</li>
            <li>Strategy</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Design Skills</h2>

          <ul className="space-y-2 text-gray-400">
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Team work</li>
            <li>Communication</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Hobbies</h2>

          <p className="text-gray-400">
            Coding • Learning Tech • Reading • Gaming
          </p>
        </div>

      </div>
    </section> 
     )
}
