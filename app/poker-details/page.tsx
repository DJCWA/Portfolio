import Link from 'next/link';
import ImageWithTooltip from './components/ImageWithTooltip';

export default function PokerDetails() {
  return (
    <div className="poker-details-container">
      <Link href="/" className="back-button">← Back to Portfolio</Link>
      <header className="portfolio-header">
        <h1 className="portfolio-title">Poker Game Details</h1>
        <p className="portfolio-subtitle">This section will contain a detailed description of the Poker game, its features, and how it works.</p>
      </header>
      
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
        <a href="/PokerGame.zip" download className="work-item-button" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Download Game</a>
      </div>
    </div>
  );
}
