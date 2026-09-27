import Navbar from "./components/Navbar"

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main>
          <h1 className="text-4xl font-bold text-gray-900">
            Find your next opportunity
          </h1>
        </main>
      </div>
  )
}

export default App