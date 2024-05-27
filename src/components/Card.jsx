

export default function Card({question, category}) {

  return (
    <div className="bg-slate-300 text-black px-2 py-2 border border-black w-40 h-40">
      <p>{category}</p>
      <h3 className="font-bold">Is it only me...</h3>
      <p>{question}</p>
    </div>
  )
}



