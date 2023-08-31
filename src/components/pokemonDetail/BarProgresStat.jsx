import { bgStylePokemonType } from "../../shared/pokemon"

export const BarProgresStat = ({stat,type}) => {
 
  const getPercentBarProgress = (statValue) =>{
    const MAX_STAT_VALUE = 255
    const percent = (100 * statValue) / MAX_STAT_VALUE
    return `${percent}%`

  }  

  return (
    <article className="font-semibold text-xl ">
        <section className="flex justify-between px-1">
            <h5>{stat.name}</h5>
            <span>{stat.value}/255</span>
        </section>
        <div className="h-6 bg-slate-300 rounded-md">
            <div style={{width: getPercentBarProgress(stat.value)}} className={`h-full ${bgStylePokemonType[type]} `}></div>
        </div>

    </article>
  )
}