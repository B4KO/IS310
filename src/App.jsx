import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {


  return (
    <>
  <div
    className="hero min-h-screen"
    style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      backgroundSize: 'cover',  // Ensures the background covers the entire div
      backgroundPosition: 'center', // Centers the background image
      backgroundRepeat: 'no-repeat', // Prevents the background from repeating
    }}
    >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-9xl font-bold text-white">Gruppe 21</h1>
        <h3 className="mb-5 text-lg text-white">
        Vår lidenskap for teknologi, kombinert med en sterk teoretisk bakgrunn
 og praktisk erfaring, gjør oss til et dynamisk team som er klare for å møte 
morgendagens utfordringer. 
        </h3>
        <button className="btn btn-primary" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>Les mer</button>
      </div>
    </div>
  </div>

    {/*Second page*/}

    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Vi er...</h1>
      <p className="py-6">
      Fem unike individer, hver med sine spesifikke ferdigheter og interesser. Sammen utfyller vi hverandre og skaper en sterk enhet som er klar til å ta på oss ulike utfordringer.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    {/*Third page*/}
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
      {/* Row 1 */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <button className="btn bg-blue-700 text-white hover:bg-blue-800">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </button>
            <button className="btn bg-gray-800 text-white hover:bg-gray-900">
              <i className="fab fa-github mr-2"></i> GitHub
            </button>          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <button className="btn bg-blue-700 text-white hover:bg-blue-800">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </button>
            <button className="btn bg-gray-800 text-white hover:bg-gray-900">
              <i className="fab fa-github mr-2"></i> GitHub
            </button>          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <button className="btn bg-blue-700 text-white hover:bg-blue-800">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </button>
            <button className="btn bg-gray-800 text-white hover:bg-gray-900">
              <i className="fab fa-github mr-2"></i> GitHub
            </button>          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <button className="btn bg-blue-700 text-white hover:bg-blue-800">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </button>
            <button className="btn bg-gray-800 text-white hover:bg-gray-900">
              <i className="fab fa-github mr-2"></i> GitHub
            </button>          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <button className="btn bg-blue-700 text-white hover:bg-blue-800">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </button>
            <button className="btn bg-gray-800 text-white hover:bg-gray-900">
              <i className="fab fa-github mr-2"></i> GitHub
            </button>          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <button className="btn bg-blue-700 text-white hover:bg-blue-800">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </button>
            <button className="btn bg-gray-800 text-white hover:bg-gray-900">
              <i className="fab fa-github mr-2"></i> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Våre ferdigheter</h1>
      <p className="py-6">Her er våre ferdigheter som gjør oss utstående.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 lg:mt-0 w-full">
      {/* Skill Card Example */}
      <div className="card bg-base-100 shadow-xl text-center p-6 flex flex-col justify-between">
        <div>
          <div className="text-5xl">💻</div>
          <h2 className="text-2xl font-bold mt-4">Web Development</h2>
          <p className="text-base mt-2">HTML, CSS, JavaScript, React, Vue.js</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl text-center p-6 flex flex-col justify-between">
        <div>
          <div className="text-5xl">🖌️</div>
          <h2 className="text-2xl font-bold mt-4">Design</h2>
          <p className="text-base mt-2">UI/UX, Adobe XD, Figma</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl text-center p-6 flex flex-col justify-between">
        <div>
          <div className="text-5xl">🔒</div>
          <h2 className="text-2xl font-bold mt-4">Cybersecurity</h2>
          <p className="text-base mt-2">Penetration Testing, Security Audits</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl text-center p-6 flex flex-col justify-between">
        <div>
          <div className="text-5xl">📱</div>
          <h2 className="text-2xl font-bold mt-4">Mobile Development</h2>
          <p className="text-base mt-2">iOS, Android, React Native</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl text-center p-6 flex flex-col justify-between">
        <div>
          <div className="text-5xl">☁️</div>
          <h2 className="text-2xl font-bold mt-4">Cloud Computing</h2>
          <p className="text-base mt-2">AWS, Azure, Google Cloud</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl text-center p-6 flex flex-col justify-between">
        <div>
          <div className="text-5xl">🛠️</div>
          <h2 className="text-2xl font-bold mt-4">DevOps</h2>
          <p className="text-base mt-2">CI/CD, Docker, Kubernetes</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-9xl font-bold">Vi leter etter...</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
  </div>
</div>

<div className="hero bg-base-200 min-h-screen flex items-center justify-center">
  <div className="hero-content w-full text-center">
    <div className="mx-auto">
      <h1 className="text-9xl font-bold mb-8 text-center">Interessert?</h1>
      <form className="space-y-6" action='javascript:void(0);'>
        <div className="form-control w-full max-w-xs mx-auto">
          <div className="label">
            <span className="label-text">Hva er navnet ditt?</span>
          </div>
          <input
            type="text"
            placeholder="Skriv her"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full max-w-xs mx-auto">
          <div className="label">
            <span className="label-text">Din melding</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Din melding"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            className="btn"
            onClick={() => document.getElementById('my_modal_2').showModal()}
          >
            Send!
          </button>
        </div>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Meldingen ble sendt!</h3>
            <p className="py-4">
              Takk at du lå igjen en melding. Vi kontakter deg så fort vi kan!
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </form>
    </div>
  </div>
</div>



  </>
  )
}

export default App
