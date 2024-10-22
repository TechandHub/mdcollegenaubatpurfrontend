import React from 'react'

export default function About() {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-10 lg:py-20">
        <section>
          <div className="container mx-auto lg:flex lg:flex-row-reverse gap-20">
            <div className="lg:w-2/5 rounded overflow-hidden">
              <div className='w-full mb-6'>
                <img className='rounded' src="images/aboutpageheroimg.jpeg" alt="Principal" />
              </div>
            </div>

            <div className="text-left lg:text-left lg:w-3/5">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-none">About Us</h1>

              <p className="text-xl lg:text-2xl mt-4 font-semibold text-purple-700">Innovative Way To Learn</p>

              <p className="mt-4 text-gray-600">Maltidhari College founded on 14th. July 1956 by combined efforts of progressive and visionary local formers, philanthropist and education lovers, It is a premier rural college of Patna district. Initially it was named as “Swamy Vasudevacharya College”. In the later years due to generous donations by Smt. Maltidhari Singh and with consent of the Governing Body & by approval of Swamy Vasudercharya, it’s name has been changed to be known as “Maltidhari College”. Our founder secretary Sri Sidheshwar Prasad Singh, Advocate (Patna High Court) and first principal Prof. Bangali Singh along with other Stakeholders have struggled tirelessly to transform this college into a progressive, equal opportunity Institution that has today become an important Centre of Higher Education in this far flung rural area of Naubatpur block. This college got it’s first affiliation in 1957 from Patna University. After coming into existence of BRA Bihar University, Muzaffarpur it came under jurisdiction of BRA Bihar University, Muzaffarpur, and then finally it become a constituent unit of Magadh University, Bodh-Gaya. Presently we are catering higher education from higher secondary level (10+2) to Graduation level in faculty of Science, Arts and Vocational studies (BCA) in total 15 Subjects. We strive to provide the best to our students, be it educational ambience, infrastructure or technological advancements. We have pledged in letter and spirits to make your stay in the college a memorable and fruitful one.</p>

              
            </div>
          </div>
        </section>
    </div>
  )
}
