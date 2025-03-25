import { FileImage } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <header className="border-b-1 border-gray-800 py-6 bg-gray-950 top-0 sticky z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-purple-800 p-2 rounded-lg">
                  <FileImage className="h-4 w-4  text-white"/>
              </div>
              <div className="flex items-center">
                <h1 className="text-white text-xl font-bold">Piccon</h1>
                <h1 className="font-extrabold text-xl text-purple-800">.</h1>
              </div>
              
            </div>
              
          </div>
        </div>
      </header>
    </div>
  );
}
