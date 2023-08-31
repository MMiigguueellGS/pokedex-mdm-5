import { BarProgresStat } from "./BarProgresStat";

export const StatBarList = ({ stats, type }) => {
  
  return (
    <section>
      <h2 className="text-3xl font-bold">Stats</h2>
      <section>
        {type &&
          stats?.map((stat) => (
            <BarProgresStat key={stat?.name} stat={stat} type={type} />
          ))}
      </section>
    </section>
  );
};
