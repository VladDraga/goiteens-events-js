import { Board } from "./EventBoard.styled"
import { Event } from "../Event/Event"

export const EventBoard = ({events}) => {
    return (
    <Board>
        {events.map(({ name, location, speaker, type, time: { start, end } }) => (
            <Event
                key={name}
                name={name}
                location={location}
                speaker={speaker}
                type={type}
                start={start}
                end={end}
            />
        ))}
    </Board>
);
}