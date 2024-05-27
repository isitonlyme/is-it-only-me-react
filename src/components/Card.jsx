

export default function Card({question, category}) {

  return (
    <div className="bg-slate-300 text-black px-2 py-2 border border-black w-40 h-40 absolute top-24 left-24">
      <p>{category}</p>
      <h2 className="font-bold">Is it only me...</h2>
      <p>{question}</p>
    </div>
  )
}



