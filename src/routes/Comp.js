import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { NewsContext } from '../App';
import NewsCard from '../Components/NewsCard';
import "../NewsCard.css"
import { Button } from '@mui/material';

function Comp({isSwipeMode, setIsSwipeMode}) {
  const dummmyObject = [
    {
        "title": "What's in the debt ceiling deal struck by Biden and McCarthy? - CNBC",
        "url": "https://www.cnbc.com/2023/05/29/whats-in-the-debt-ceiling-deal-struck-by-biden-and-mccarthy.html",
        "published_date": "2023-05-29T04:21:57+00:00",
        "publisher": {
            "name": "CNBC",
            "url": "https://www.cnbc.com"
        }
    },
    {
        "title": "Turkey's President Erdoğan wins re-election - Axios",
        "url": "https://www.axios.com/2023/05/28/erdogan-wins-turkey-election-runoff",
        "published_date": "2023-05-29T03:46:24+00:00",
        "publisher": {
            "name": "Axios",
            "url": "https://www.axios.com"
        }
    },
    {
        "title": "Explosions as Russia launches 15th air assault on Kyiv in May - Al Jazeera English",
        "url": "https://www.aljazeera.com/news/2023/5/29/explosions-as-russia-launches-15th-air-assault-on-kyiv-in-may",
        "published_date": "2023-05-29T03:16:42+00:00",
        "publisher": {
            "name": "Al Jazeera English",
            "url": "https://www.aljazeera.com"
        }
    },
    {
        "title": "Japan puts missile defences on alert as North Korea warns of satellite launch - Reuters",
        "url": "https://www.reuters.com/world/asia-pacific/north-korea-notified-japan-plan-launch-satellite-between-may-31-june-11-nhk-2023-05-28/",
        "published_date": "2023-05-29T09:17:00+00:00",
        "publisher": {
            "name": "Reuters",
            "url": "https://www.reuters.com"
        }
    },
    {
        "title": "Head of RT Margarita Simonyan Calls for Lindsey Graham's Assassination After Edited Russia Comments - The Daily Beast",
        "url": "https://www.thedailybeast.com/head-of-rt-margarita-simonyan-calls-for-lindsey-grahams-assassination-after-edited-russia-comments",
        "published_date": "2023-05-28T22:55:02+00:00",
        "publisher": {
            "name": "The Daily Beast",
            "url": "https://www.thedailybeast.com"
        }
    },
    {
        "title": "Trump blasts Texas Gov. Greg Abbott over staying silent during AG's impeachment - New York Post",
        "url": "https://nypost.com/2023/05/28/trump-blasts-greg-abbotts-silence-over-texas-ag-ken-paxtons-impeachment/",
        "published_date": "2023-05-29T01:04:00+00:00",
        "publisher": {
            "name": "New York Post",
            "url": "https://nypost.com"
        }
    },
    {
        "title": "Rescue operations underway after apartment building partially collapses in Davenport, Iowa - ABC News",
        "url": "https://abcnews.go.com/US/wireStory/building-partially-collapses-davenport-iowa-potential-injuries-immediately-99666884",
        "published_date": "2023-05-29T10:04:07+00:00",
        "publisher": {
            "name": "ABC News",
            "url": "https://abcnews.go.com"
        }
    },
    {
        "title": "Outlaw biker gangs involved in shootout that kills 3 at New Mexico motorcycle rally, police say - OregonLive",
        "url": "https://www.oregonlive.com/news/2023/05/outlaw-biker-gangs-involved-in-shootout-that-kills-3-at-new-mexico-motorcycle-rally-police-say.html",
        "published_date": "2023-05-28T21:03:00+00:00",
        "publisher": {
            "name": "OregonLive",
            "url": "https://www.oregonlive.com"
        }
    },
    {
        "title": "Remains of Korean War Medal of Honor recipient to be laid to rest - ArmyTimes.com",
        "url": "https://www.armytimes.com/news/your-army/2023/05/26/remains-of-korean-war-medal-of-honor-recipient-to-be-laid-to-rest/",
        "published_date": "2023-05-26T19:05:22+00:00",
        "publisher": {
            "name": "ArmyTimes.com",
            "url": "https://www.armytimes.com"
        }
    },
    {
        "title": "Body of escaped Ohio prison inmate and convicted murderer Bradley Gillespie believed found in Ohio River - CBS News",
        "url": "https://www.cbsnews.com/news/bradley-gillespie-dead-escaped-inmate-ohio-river-henderson-kentucky/",
        "published_date": "2023-05-28T21:58:00+00:00",
        "publisher": {
            "name": "CBS News",
            "url": "https://www.cbsnews.com"
        }
    },
    {
        "title": "Lukashenko offers nuclear weapons to nations willing ‘to join the Union State of Russia and Belarus’ - CNN",
        "url": "https://www.cnn.com/2023/05/28/europe/lukashenko-nuclear-weapons-belarus-russia-intl-hnk/index.html",
        "published_date": "2023-05-29T03:26:00+00:00",
        "publisher": {
            "name": "CNN",
            "url": "https://www.cnn.com"
        }
    },
    {
        "title": "Sánchez’s Socialists suffer in Spain’s regional, municipal elections - POLITICO Europe",
        "url": "https://www.politico.eu/article/pedro-sanchez-socialists-suffer-regional-municipal-elections/",
        "published_date": "2023-05-29T04:51:18+00:00",
        "publisher": {
            "name": "POLITICO Europe",
            "url": "https://www.politico.eu"
        }
    },
    {
        "title": "‘Dictatorship’: Protesting Indian wrestlers charged with rioting - Al Jazeera English",
        "url": "https://www.aljazeera.com/news/2023/5/28/world-is-watching-indian-police-drag-away-protesting-wrestlers",
        "published_date": "2023-05-29T08:35:02+00:00",
        "publisher": {
            "name": "Al Jazeera English",
            "url": "https://www.aljazeera.com"
        }
    },
    {
        "title": "Asia markets mixed after U.S. reaches debt ceiling deal; Japan stocks at highest since July 1990 - CNBC",
        "url": "https://www.cnbc.com/2023/05/29/asia-markets.html",
        "published_date": "2023-05-29T07:57:00+00:00",
        "publisher": {
            "name": "CNBC",
            "url": "https://www.cnbc.com"
        }
    },
    {
        "title": "Debt-Limit Deal Brings Relief Tinged by Caution: Markets Wrap - Yahoo Finance",
        "url": "https://finance.yahoo.com/news/us-stock-futures-rise-dollar-231234882.html",
        "published_date": "2023-05-29T10:00:38+00:00",
        "publisher": {
            "name": "Yahoo Finance",
            "url": "https://finance.yahoo.com"
        }
    },
    {
        "title": "All the Nvidia news announced by Jensen Huang at Computex - TechCrunch",
        "url": "https://techcrunch.com/2023/05/28/nvidia-computex-jensen-huang/",
        "published_date": "2023-05-29T07:41:15+00:00",
        "publisher": {
            "name": "TechCrunch",
            "url": "https://techcrunch.com"
        }
    },
    {
        "title": "Turkish lira teeters near record low as Erdogan secures victory - Reuters",
        "url": "https://www.reuters.com/markets/currencies/turkish-lira-slips-2005-against-dollar-erdogan-claims-victory-2023-05-28/",
        "published_date": "2023-05-29T06:47:00+00:00",
        "publisher": {
            "name": "Reuters",
            "url": "https://www.reuters.com"
        }
    },
    {
        "title": "Will Windows AI Copilot be the ultimate PC accessibility tool? - Digital Trends",
        "url": "https://www.digitaltrends.com/computing/windows-copilot-ultimate-accessibility-tool/",
        "published_date": "2023-05-28T17:00:47+00:00",
        "publisher": {
            "name": "Digital Trends",
            "url": "https://www.digitaltrends.com"
        }
    },
    {
        "title": "Developer says its app can spot counterfeits and fakes using a smartphone camera - PhoneArena",
        "url": "https://www.phonearena.com/news/app-spots-counterfeits-fakes-with-photo_id147760",
        "published_date": "2023-05-28T06:00:36+00:00",
        "publisher": {
            "name": "PhoneArena",
            "url": "https://www.phonearena.com"
        }
    },
    {
        "title": "Apple iPhone Design May See Biggest Change In Years, New Leak Claims - Forbes",
        "url": "https://www.forbes.com/sites/davidphelan/2023/05/28/apple-iphone-design-may-see-biggest-change-in-years-new-leak-claims/",
        "published_date": "2023-05-28T20:32:35+00:00",
        "publisher": {
            "name": "Forbes",
            "url": "https://www.forbes.com"
        }
    },
    {
        "title": "I wore the Dyson Zone headphones on a long flight — it was pretty much a disaster - Tom's Guide",
        "url": "https://www.tomsguide.com/features/i-wore-the-dyson-zone-headphones-on-a-long-flight-it-was-pretty-much-a-disaster",
        "published_date": "2023-05-28T04:30:00+00:00",
        "publisher": {
            "name": "Tom's Guide",
            "url": "https://www.tomsguide.com"
        }
    },
    {
        "title": "‘Succession’ Creator Jesse Armstrong & Director Mark Mylod On How The Series Finale Highlights The Inevitability Of The Roy Family Tragedy - Deadline",
        "url": "https://deadline.com/2023/05/succession-series-finale-hbo-jesse-armstrong-mark-mylod-waystar-ceo-1235382098/",
        "published_date": "2023-05-29T03:25:00+00:00",
        "publisher": {
            "name": "Deadline",
            "url": "https://deadline.com"
        }
    },
    {
        "title": "Horoscope for Monday, May 29, 2023 - Chicago Sun-Times",
        "url": "https://chicago.suntimes.com/2023/5/29/23735474/horoscopes-today-monday-may-29-2023",
        "published_date": "2023-05-29T05:04:26+00:00",
        "publisher": {
            "name": "Chicago Sun-Times",
            "url": "https://chicago.suntimes.com"
        }
    },
    {
        "title": "Billie Eilish hits out at \"women hating ass weirdos\" who criticise her fashion choices - NME",
        "url": "https://www.nme.com/news/music/billie-eilish-hits-out-at-women-hating-ass-weirdos-who-criticise-her-fashion-choices-3448991",
        "published_date": "2023-05-28T16:44:10+00:00",
        "publisher": {
            "name": "NME",
            "url": "https://www.nme.com"
        }
    },
    {
        "title": "In the 'Barry' Finale, Hollywood Gets Away with Murder - The New York Times",
        "url": "https://www.nytimes.com/2023/05/28/arts/television/barry-finale.html",
        "published_date": "2023-05-29T03:05:09+00:00",
        "publisher": {
            "name": "The New York Times",
            "url": "https://www.nytimes.com"
        }
    },
    {
        "title": "Celtics-Heat Game 7: Jimmy Butler is still guaranteeing victory, and you'd still be foolish to doubt him - CBS Sports",
        "url": "https://www.cbssports.com/nba/news/celtics-heat-game-7-jimmy-butler-is-still-guaranteeing-victory-and-youd-still-be-foolish-to-doubt-him/",
        "published_date": "2023-05-29T06:06:00+00:00",
        "publisher": {
            "name": "CBS Sports",
            "url": "https://www.cbssports.com"
        }
    },
    {
        "title": "Alonso says he ‘didn’t have a chance’ to take Monaco GP win as he praises Verstappen for driving ‘super well’ - Formula 1",
        "url": "https://www.formula1.com/en/latest/article.alonso-says-he-didnt-have-a-chance-to-take-monaco-gp-win-as-he-praises.2la6kzWeJ2qHM7NmXlmwnY.html",
        "published_date": "2023-05-29T00:48:23+00:00",
        "publisher": {
            "name": "Formula 1",
            "url": "https://www.formula1.com"
        }
    },
    {
        "title": "Fever beat Dream to end WNBA record-tying 20-game losing skid - ESPN - ESPN",
        "url": "https://www.espn.com/wnba/story/_/id/37749669/fever-beat-dream-end-wnba-record-tying-20-game-losing-skid",
        "published_date": "2023-05-28T23:00:00+00:00",
        "publisher": {
            "name": "ESPN",
            "url": "https://www.espn.com"
        }
    },
    {
        "title": "‘They should be embarrassed’: Ukraine’s Kostyuk calls out French Open crowd after boos - FRANCE 24 English",
        "url": "https://www.france24.com/en/sport/20230529-they-should-be-embarrassed-ukraine-s-kostyuk-calls-out-french-open-crowd-after-boos",
        "published_date": "2023-05-29T00:18:20+00:00",
        "publisher": {
            "name": "FRANCE 24 English",
            "url": "https://www.france24.com"
        }
    },
    {
        "title": "UAE to land a probe on an asteroid between Mars and Jupiter in 2034 - Space.com",
        "url": "https://www.space.com/uae-asteroid-mission-details-landing-2034",
        "published_date": "2023-05-28T07:01:35+00:00",
        "publisher": {
            "name": "Space.com",
            "url": "https://www.space.com"
        }
    },
    {
        "title": "A Japanese-Made Moon Lander Crashed Because a Crater Confused Its Software - Slashdot - Slashdot",
        "url": "https://science.slashdot.org/story/23/05/28/2012238/a-japanese-made-moon-lander-crashed-because-a-crater-confused-its-software",
        "published_date": "2023-05-28T23:54:03+00:00",
        "publisher": {
            "name": "Slashdot",
            "url": "https://science.slashdot.org"
        }
    },
    {
        "title": "Saturn’s iconic rings are disappearing - indy100",
        "url": "https://www.indy100.com/science-tech/saturn-rings-disappearing-why-space-2660716556",
        "published_date": "2023-05-29T07:00:23+00:00",
        "publisher": {
            "name": "indy100",
            "url": "https://www.indy100.com"
        }
    },
    {
        "title": "More exercise appeared to lower women's Parkinson's risk, study says - The Washington Post",
        "url": "https://www.washingtonpost.com/wellness/2023/05/28/parkinsons-disease-women-exercise/",
        "published_date": "2023-05-28T12:30:00+00:00",
        "publisher": {
            "name": "The Washington Post",
            "url": "https://www.washingtonpost.com"
        }
    },
    {
        "title": "Diagnosing Dementia Early On Is Important, but Often Tough - The Wall Street Journal",
        "url": "https://www.wsj.com/articles/dementia-diagnosis-difficulties-frontotemporal-9c1486c5",
        "published_date": "2023-05-29T04:01:00+00:00",
        "publisher": {
            "name": "The Wall Street Journal",
            "url": "https://www.wsj.com"
        }
    },
    {
        "title": "Scientists use AI to discover antibiotic to fight deadly hospital bug - USA TODAY",
        "url": "https://www.usatoday.com/story/news/health/2023/05/27/scientists-use-ai-to-discover-antibiotic-to-fight-deadly-hospital-bug/70262067007/",
        "published_date": "2023-05-29T03:02:35+00:00",
        "publisher": {
            "name": "USA TODAY",
            "url": "https://www.usatoday.com"
        }
    }
]

  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const data = useContext(NewsContext);
  const getNewArray = data.news_data[0].articles;
  const [newsCounter, setNewsCounter] = useState(0);
  
  useEffect(()=>{
    
  }, [])

  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
    setEndX(null);
  }

  function handleTouchMove(e) {
    if (startX === null) return;

    setEndX(e.touches[0].clientX);
  }

  function handleTouchEnd() {
    if (startX === null || endX === null) return;

    const deltaX = endX - startX;

    if (deltaX > 50) {
      upButtonPressed();
    } else if (deltaX < -50) {
      downButtonPressed();
    }

    setStartX(null);
    setEndX(null);
  }


  const upButtonPressed = () => {
    if (newsCounter < getNewArray.length - 1) {
      setNewsCounter(newsCounter + 1);
      console.log(newsCounter);

    }
  }

  const downButtonPressed = () => {
    if (newsCounter > 0) {
      setNewsCounter(newsCounter - 1);
      console.log(newsCounter);
    }
  }

  const returnNewCards = () => {
    if (getNewArray === undefined) {
      if(isSwipeMode === true)
      {
        return <div className='swipe-container'><NewsCard title=
        {dummmyObject[newsCounter].title}
        publisherName={dummmyObject[newsCounter].publisher.name}
        url={dummmyObject[newsCounter].url}
        published_date={dummmyObject[newsCounter].published_date}
        isSwipeMode={isSwipeMode}
      /></div> 
      }
      else if (isSwipeMode === false)
      {
        return( <div className='grid-container'>{dummmyObject.map((value, index) =>{
            return <NewsCard title=
            {value.title}
            publisherName={value.publisher.name}
            url={value.url}
            published_date={value.published_date}
            isSwipeMode={isSwipeMode}
            />
        })}</div>
        )
      }
    }
    else {
      if(isSwipeMode === true)
      {
        return <div className='swipe-container'><NewsCard title=
        {getNewArray[newsCounter].title}
        publisherName={getNewArray[newsCounter].publisher.name}
        url={getNewArray[newsCounter].url}
        published_date={getNewArray[newsCounter].published_date}
        isSwipeMode={isSwipeMode}
      /></div> 
      }
      else if (isSwipeMode === false)
      {
        return( <div className='grid-container'>{getNewArray.map((value, index) =>{
            return <NewsCard title=
            {value.title}
            publisherName={value.publisher.name}
            url={value.url}
            published_date={value.published_date}
            isSwipeMode={isSwipeMode}
            />
        })}</div>
        )
      }

    

    }
  }

  const loadButtons = () => {
    if (getNewArray === undefined || data.ifIsMobile === true) {
      return <div> </div>
    }
    else {
      return <div>
        <Button onClick={upButtonPressed}> Up</Button>
        <Button onClick={downButtonPressed}> Down </Button>
      </div>
    }
  }


  return (
    <div className='master-container' onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd} >
      {
        returnNewCards()
      }

      {
        loadButtons()
      }

    </div>
  )
}

export default Comp;