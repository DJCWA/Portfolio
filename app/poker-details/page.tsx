import Link from 'next/link';
import ImageWithTooltip from './components/ImageWithTooltip';

export default function PokerDetails() {
  return (
    <div className="poker-details-container">
      <Link href="/" className="back-button">← Back to Portfolio</Link>
      

      <section className="project-detail-section">
        <h2>Project Overview</h2>
        <p>
          This poker game was developed as a core project for an Object-Oriented Programming (OOP) course. It allows users to play single-player poker against AI opponents in two popular variations: Texas Hold 'em and Five Card Draw. The game features customizable settings, including the number of players, starting money, and AI difficulty, providing a flexible and engaging experience.
        </p>

        <h2>Technical Implementation</h2>
        <p>
          The game was built using C# and Windows Forms, leveraging key Object-Oriented Programming principles to create a modular and maintainable codebase. Key technical aspects include:
        </p>
        <ul>
          <li>
            <strong>Class Hierarchy:</strong> A well-defined class hierarchy was implemented, with base classes for `Card`, `Deck`, `Player`, and `Game`. This allowed for code reusability and clear separation of concerns. For instance, `Player` could be extended by `HumanPlayer` and `AIPlayer`.
          </li>
          <li>
            <strong>Game Logic Encapsulation:</strong> The core game logic for both Texas Hold 'em and Five Card Draw was encapsulated within dedicated classes. This included handling card dealing, betting rounds, hand evaluation, and determining winners based on poker rules.
          </li>
          <li>
            <strong>AI Implementation:</strong> Basic AI logic was developed for computer opponents, allowing them to make decisions (fold, call, raise) based on their hand strength and the current game state. This involved algorithms for hand ranking and simple strategic considerations.
          </li>
          <li>
            <strong>Event-Driven Architecture:</strong> Windows Forms provided an event-driven framework, where user interactions (button clicks, input changes) triggered specific methods within the game logic, ensuring a responsive user interface.
          </li>
          <li>
            <strong>State Management:</strong> The game's state (current pot, player money, community cards, active player) was carefully managed across different turns and rounds to ensure accurate progression of the game.
          </li>
        </ul>
        <p>
          The project demonstrated a practical application of OOP concepts such as encapsulation, inheritance, and polymorphism in building a functional and interactive application.
        </p>
      </section>
      
      <div className="poker-images" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Screenshots/Images</h2>
        
        <ImageWithTooltip 
          src="/poker main menu.PNG" 
          alt="Poker Main Menu" 
          description="This is the main menu for the game where you can choose which variation of poker (Texas Hold 'em or Five Card Draw), the amount of players, your starting money, and the difficulty." 
        />

        <ImageWithTooltip 
          src="/poker five card.PNG" 
          alt="Poker Five Card" 
          description="This is the five card variation with 3 players selected and the starting hand which is randomly generated." 
        />

        <ImageWithTooltip 
          src="/poker texas hold em'.PNG" 
          alt="Poker Texas Em" 
          description="This is the Texas Hold Em' variation with 3 players selected with a randomized starting hand." 
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <a href="https://drive.google.com/uc?export=download&id=1ZlstEnecM02_5X-yFcb7hiS-IBLS6KP1" className="work-item-button" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Download Game</a>
      </div>
    </div>
  );
}
