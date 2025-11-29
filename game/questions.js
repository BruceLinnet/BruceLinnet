const questions = [
    {
        question: 'Vad gav dig din exekutiva look i Tibble?',
        answer: 'Johan kommer främst ihåg Johans exekutiva look med chevalierväska (dokumentportfölj) i Tibble.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Johan o Helena Brandt',
        qId: '1'

    },
    {
        question: 'Hur länge sitter karamellfärg kvar om du skulle råka få det i ansiktet?',
        answer: 'Ett av mina första minnen av Johan är när han klädde ut sig till marsmänniska på spacepartyt. Det var roligt när den gröna karamellfärgen i ansiktet var kvar hela veckan och han fick gå grön i Tibble också.🤢 \nTyckte över huvud taget att Johan och Norden som radarpar var något av de roligaste på alla fester. Galna, jättekul och jättegulliga😘 \nFrån Helena Brandt\n \n Bild från Lena Scharp',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Johan o Helena Brandt',
        qId: '2',
        img: './../pictures/lenaS.jpg',
        altText: '',
        imgText: 'Bild från Lena Scharp '
    },
    {
        question: 'Vad svarar du om en hembygdsgubbe i Väsby Kungsgård, Sala frågar om du vill se dennes vapensamling?',
        answer: 'Ett uttryck som kommer från Johan är det han yttrade när han och hans morfar besökte Väsby kungsgård i Sala och en hembygdsgubbe frågade om han skulle visa dem vapensamlingen. "Det kan vara onödigt", lär Johan ha svarat då. Så det blev inte av. \nDetta har jag hört av pappa Hilmer, som tyckte det var kul.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Sesse',
        qId: '3'

    },
    {
        question: 'Till vem skickade du ett vykort och berättade om din allvarliga cykelolycka?',
        answer: 'Olov berättar att han 1970 el 71 fick ett vykort från Johan, där han berättade att han hade cyklat omkull på järnvägsspåret och att han hade färdats med ambulans till sjukhus. \nHan var tydligt stolt över denna bedrift, och Olov var mäkta imponerad av sin fyra år äldre kusin.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Olov',
        qId: '4'

    },
    {
        question: 'Vem stod tyst, stilla och rörde inte en min när han snott en kula som tre andra letade efter?',
        answer: '(Läs sonetten!) Det som poppade upp först i mitt huvud var ett minne som Johan själv knappast kan komma ihåg. Och jag har säkert nämnt det förut. Men det mysiga, förutom det komiska, är att jag så himla väl minns hur den lille Johan (om han var 2-3 så var jag 12) såg ut, och att han liksom var så cool som småbarn. I alla fall som JAG minns honom. Stod tyst och stilla och bara observerade... Han röjde inte med en min att han korpat kulan som vi tre andra letade efter.',
        correct: '',
        points: 1,
        decade: '1960',
        author: 'Janne Nyberg',
        qId: '5'

    },
    {
        question: 'Förutom båt, vilket färdmedel lämpar sig bäst för att ta sig till Sandhamn? ',
        answer: 'Tänker på ett foto från en underbar helg. Skickar fotot i helgen! Minnet är du(Sysse), Katti och jag - uppklädda i långklänning, långa naglar och high heels. Limousine till  överraskningsmiddag. Vi åkte ut mot Ekerö... fram till ett vattenflygplan som vi klättrade ombord på. Vi flög över stan, ut över skärgården. Och landade i Sandhamn. Där tog Johan, Peo och Stefan emot på Hasses båt. Och vi festade, skålade och rökte (!)... Förlåt Linnéa och Axel - vi visste inte att ni var på gång...😬\nEn magisk helg som de fina gossarna (nu mer gubbar kanske) ordnade för oss. Och vi håller fast vid dem ännu🙂😘❤️',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Sussie och Stefan',
        qId: '6'

    },
    {
        question: 'Vilka kom på besök på landet i Cool och fick se den fina myrsamlingen?',
        answer: 'Det är ju så mycket roligt vi har haft med Johan och dig genom åren så det är svårt att välja. \nI stora drag så minns vi ju alla roliga träffar vi haft på sjön, på ert fina landställe, Och på olika middagar och event på stan med mera. \nBland annat minns vi när ni kom och hälsade på oss i vår båt Cool utanför Vindö, I ösregn! Ändå var Johan som alltid på gott humör Och vi hade alla en mysig stund i vår båt och solen sprack så småningom fram. \nSedan minns vi också Många trevliga stunder på ert landställe, inte minst när Johan visade oss er fina lilla myrsamling uppe i ett utkikstorn. \nOch så är alltid Johans goda humör, reflekterande och inlyssnande sätt, och inte minst hans underbara garv något som förgyller alla träffar med honom😀💖.',
        correct: '',
        points: 1,
        decade: '2010',
        author: 'Åsa och Bigge',
        qId: '7'

    },
    {
        question: 'Vilka bor tillsammans med Hennes Kungliga Höghet Prinsessan Lingon? (Kanske omöjlig att svara på.)',
        answer: 'Vi har så många fina minnen av Johan att vi inte kan nedkalla något explicit och heller för festligheterna lämpat. ;) Däremot medskickar vi ett stor födelsedagshurra från djupet av våra hjärtan, med bifall från vårt nya husdjur: Hennes Kungliga Höghet Prinsessan Lingon, 11 v.Inte den vassaste kniven i lådan(än) men snabb.',
        correct: '',
        points: 1,
        decade: '2020',
        author: 'Chrissie o Curt',
        qId: '8'

    },
    {
        question: 'Vem tillbringade du en vansinnig segeltur på Stora Värtan med?',
        answer: 'Jag har en massa olika minnen av saker jag gjort ihop med Johan. Det absolut häftigaste/vansinniga seglarminnet är när vi var ute o seglade på Stora Värtan 25/7 1979 i familjen Lundmans Flipperjolle. Det blåste utav helvete, säkert 25-26 m/s eller mer i byarna o vi badade mest hela tiden o skrattade. Det var dagen efter en orkan runt de Brittiska öarna. Tror många dog på havet i en seglingstävling då. Idag, med dagens snabba nyhetsmedia, hade man nog aldrig ens prövat att segla jolle då.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'David',
        qId: '9'

    },
    {
        question: 'Hur är sjukhusen i Frankrike?',
        answer: 'Ett annat, kanske inte lika glamoröst minne, var när jag fick hämta honom på sjukhus i Frankrike 1978. Vi bodde på hotell i Juan les Pins. Tror det hette Eden. Det var Foo, Johan o jag som tågluffade. Johan kom bort då vi var ute på stan o partajade. Mitt i natten knackade det på dörren. Det var hotellägaren. Jag fick åka med honom o kvittera ut Johan på det lokala sjukhuset.  Johan var 17 o jag 18, hujedamig. Det hände många tokiga saker på den resan. Tur att vi kom hem.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'David',
        qId: '10'

    },
    {
        question: 'Vilka åkte från Ekhammar för en lunch på Grinda?',
        answer: 'En kul lunchträff på Grinda. Johan o Sysse kom från landet i sin motorbåt och Katti och Peo kom från sitt land på Ekhammar. En varm och skön sommardag med full fart på bryggrestaurangen.\nDet gör vi snart om igen hoppas Peo o Katti',
        correct: '',
        points: 1,
        decade: '2010',
        author: 'Peo o Katti',
        qId: '11'

    },
    {
        question: '90-tal, landet, läskig, sprang snabbt förbi. Vilken händelse tänker vi på?',
        answer: 'Den gången Mathilda var rädd för honom – och snabbt sprang förbi, men ganska så snabbt närmade sig nyfiket.',
        points: 1,
        decade: '1990',
        author: 'Madde',
        qId: '12'

    },
    {
        question: 'Johan är ju ingen karriärklättrare, men visst har det hänt att han har klättrat under sin karriär. När då?',
        answer: 'På jobbet. Vi hade ett event en gång där vi skulle klättra på läskbackar. Man liksom bygdde ett torn och klättrade samtidigt. Johan bara byggde och byggde och klättrade och klättrade, mycket högre än någon annan. \nDet gav mig en insikt om hur envis och målfokuserad han är.\nOch vilken bra balans han har.',
        points: 1,
        decade: '1990',
        author: 'Annette Frost',
        qId: '13'

    },
    {
        question: 'Vilket ord slutar på –ntotten? ',
        answer: 'Han gav C namnet Charlottentotten. Så gulligt.',
        points: 1,
        decade: '2010',
        author: 'Annette Frost',
        qId: '14'

    },
    {
        question: 'Hur kan en trevlig fruktstund sluta i ”en utskällning som heter duga”?',
        answer: 'Ekis minns ända tillbaka till mellanstadiet när Johan bodde på Vedettvägen och Ekis på Falkvägen. ”Mörka kvällar var vi ute och pallade plommon i området. Vi sprang för livet när jag eller Johan fastnade i ett staket. Plommonägaren fick tag på oss och vi fick en utskällning som heter duga.”',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Ninni och Ekis',
        qId: '15'

    },
    {
        question: 'Vad är en räknesnurra?',
        answer: 'Ekis minns också när han hälsade på Johan när båda bodde på Kungsholmen på tidigt 80-tal. I köksfönstret låg en dosa som såg ut som en miniräknare. Ekis frågade Johan vad det var. Han sa att det var en grej han hittat på, en räknesnurra. Ekis tyckte den såg ut som en miniräknare men det visade sig att det var ursprunget till det som senare blev VPDs affärskoncept. I alla fall som Ekis minns det...',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Ninni och Ekis',
        qId: '16'
    },
    {
        question: 'Ekis som fyrverkeriansvarig, är det lyckat eller jättelyckat?',
        answer: 'Vi minns också vårt nyår på Chateau de Belleau. 1989 tror vi det var. En härlig fest i glada vänners lag! Ekis hade med sig en fyrverkeribomb som skulle bli höjdpunkten på kvällen. När det var dags föste han ut alla gäster på trappen, där alla stod med höga förväntningar. Ekis tyckte det var god ide’ att placera bomben i äppelhjulet. När stubinen tänts sprang Ekis iväg. Bomben hade tippat lite framåt, så den flög upp över slottet och briserade någonstans på slottets baksida. Ingen ser någonting!  Då hörde man ett asgarv som ekade över hela Normandie och det var självklart Johan Lundmans!',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Ninni och Ekis',
        qId: '17'

    },
    {
        question: 'Vad kan du göra på Roslagshallen?',
        answer: 'Mitt första privata minne av Johan är nog att vi spelade squash på Roslagshallen. Det var när du bodde på Roslagsgatan. Johan hade en väldigt väl utvecklad teknik nere i hörnen där han knäböjde djupt och grävde upp bollarna. Hade aldrig sett det tidigare. Inte senare heller. \nHan vann! Men denna lilla episod har han säkerligen glömt.',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Gustav och Anna Kleen',
        qId: '18'

    },
    {
        question: 'Vad krävs för att vinna en fotbollsmatch? (Ett gudbarn?)',
        answer: 'Ett Johan minne jag har är från en av alla klassiska fotbollsmatcher mot Landegrens på erat landställe. Vi hade haft övertaget hela matchen men Thomas hade vägrat ge sig och kvitterat matchen när de var 5 minuter kvar. När en minut återstår får jag bollen på kanten, jag skickar bara in den mot mål med liten förhoppning men där inne står Johan och stångas med hela familjen Landegren och lyckas på något magiskt sett avgöra hela matchen! \nKram Casper',
        correct: '',
        points: 1,
        decade: '2010',
        author: 'Casper',
        qId: '19'

    },
    {
        question: 'Det här kan du nog inte gärna veta, kanske hände det hemma hos er Greta?',
        answer: 'Ett bildminne som jag har av Johan är när han drar ett trätåg i ett snöre efter sig. Han är ca 4 år. \nMvh Inger',
        correct: '',
        points: 1,
        decade: '1960',
        author: 'Inger Lundman',
        qId: '20'

    },
    {
        question: 'Hur väcker man lättast en sovande syster?',
        answer: 'Han satte sig med sin beniga rumpa på mig för att få mig att gå upp ur sängen.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Sanna',
        qId: '21'

    },
    {
        question: 'Vad fick man för ett gäng undulatbebisar på 60/70-talet?',
        answer: 'Hampe var död och nu inköptes en undulat, Putte. Johan gjorde ihållande försök att få Putte att prata. Putte fick även flyga i Johans rum. Ulf hade satt upp pinnar som Putte kunde flyga till och landa på. Med talet blev det tyvärr inget. Istället fick Putte en fru (Puttan). Så småningom blev det fågelungar som Johan sålde för 40 kr, minns inte hur många det var. ',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Ulf och Magga',
        qId: '22'

    },
    {
        question: 'Vad ska man inte köpa begagnat?',
        answer: 'Johan fick köpa eller möjligen överta ett akvarium av en kompis. Blev så fint med fiskar i alla möjliga färger. Tyvärr en kortvarig fröjd. Akvariet läckte nämligen.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Ulf och Magga',
        qId: '23'

    },
    {
        question: 'Vad ska du göra om du vill ha högre veckopeng?',
        answer: 'En annan gång demonstrerade de med plakat för höjd veckopeng. Vet inte om de lyckades.\nVad jag däremot vet är att Johan jobbade flitigt under skoltiden. ',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Ulf och Magga',
        qId: '24'

    },
    {
        question: 'Känner du någon som har fågelfobi?',
        answer: 'Många är de gånger som vi sov över hos varandra. Att sova över hos Johan var på det stora hela både trevligt och kul. Margareta och Ulf var alltid snälla och omtänksamma även om Ulf var en retsticka av guds nåde. Där gällde det att alltid försöka tänka ut i förväg vad han skulle kunna tänkas säga så man var förberedd på en svarsreplik, men det gick väl mindre bra.n\Sedan var det Lundis fäbless för fåglar.\n Först var det undulaten Leo, som för övrigt fått sitt namn utifrån min födelsedag den 28’e juni, för då är det nämligen Leo i almanackan. Efter Leo kom det en hona och sedan blev det mängder med små undulater som såldes till zoo affären i Täby centrum om jag kommer ihåg det rätt. Möjligtvis var det zoo affären i Sollentuna. \nTill skillnad från er pappa så är jag mer eller mindre livrädd för fåglar och det var verkligen jobbigt när de skulle släppas ut ur buren för att flyga runt i rummet där vi sov. För egen del så försökte jag spela tuff och inte låtsas om min fågelfobi. jag vet inte om Lundis såg igenom detta på en gång, eller om han trodde att även jag gillade fåglar, det skulle ni ju kunna kolla upp.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Blomman',
        qId: '25'

    },
    {
        question: 'Vad krävs för att bli portad från en trädgård?',
        answer: 'På sommarlovet mellan 5’an och 6’an har jag för mig att det var (möjligtvis var det mellan 6’an och 7’an), åkte vi på fyra veckors språkresa till England. Vi var ju inget vidare på engelska kan man säga, har för mig att vi då hade läst det i två eller tre år. Hur som, vi gick i skolan på förmiddagarna och flängde runt i den lilla staden på eftermiddagarna och helgerna. Vad hittar pojkar på under sin lediga tid i den åldern? Spelar fotboll, slåss med varandra helt hjärtligt och lever rövare i största allmänhet. Det gick inte länge innan vi portades från att vara i trädgård hos dem vi bodde hos. Växter-na/blommorna mejades ner och guldfiskarna i den lilla dammen hamnade på land. Efter ytterligare någon vecka blev vi av med nyckeln till huset där vi bodde då de inte ville att vi skulle kunna vara där ensamma när de inte var hemma. \nÅ när vi någon gång var inne så brottades vi osv. Vet inte hur många gånger som mannen i familjen, som för övrigt var en gammal polis, kom in på vårt rum och sa ” behave yourself”, men inte gjorde vi det, så till slut bad han att få låna vårt lexikon, gick ner till sig och kom upp triumferande efter ngn timme och sa ” you must oppfora” Vi tittade på varandra och sedan sa Lundis, ” you men that we shall behave ourself?” Mannen nickade belåtet, men när han stängde dörren om oss så började vi brottas igen som om ingenting hade hänt. \nMycket annat hände också i England, men en sak är säker och det är att familjen var mycket lättade när vi åkte hem.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Blomman',
        qId: '26'

    },
    {
        question: 'Vad behöver du göra för att få tunnbröd?',
        answer: 'Det var inte bara Ulf som var bra på att retas, även jag var en inbiten retsticka, men när Ulf retades med finess så var jag nog bara outhärdligt jobbig och plump. Lundis älskade tunnbröd på den tiden och uppenbarligen hade de inte det så ofta hemma, så när han var hemma hos oss så frågade han ofta om han fick ta en macka, just tunnbröd. Å det fick han ju enda fram till den dagen då jag förstod att jag kunde utnyttja situationen. För efter ett tag kom jag på att jag kunde ställa ultimatum om att Johan skulle skriva ”tummbröd” med stora bokstäver i bläck eller tusch över hela handen för att få en macka. Det fungerade under en period då han gick runt med denna ”tatuering” på handen/händerna smaskandes på tunnbröd.',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Blomman',
        qId: '27'

    },
    {
        question: 'Hur mycket taxi behöver du åka för att bli rik?',
        answer: 'Mycket annat hände under barn och ungdomsåren, men nu till en episod några år längre fram i tiden. Vid hade varit på krogen på kvällen/natten. Det var Lundis, min nuvarande fru Elisabet, jag och någon till. Tror inte det var Sysse, eventuellt var det Anders Nordenstam – Norden. Johan hade i alla fall gått på Handels under några år och tagit till sig olika modeller för att tjäna pengar. Efter avslutad krogsväng, har för mig att de stängde, så vi skulle leta upp andra vattenhål. På den tiden hade vi ju inte så mycket pengar, så det var inte så vanligt att åka taxi, men Lundis hade någon teori om att ju mera taxi man åkte, desto mera tjänade man, så vi åkte taxi, från ställe till ställe, både i city och ute i periferin och fram på morgontimmarna så åkte vi runt i taxi och letade efter frukostställen, bagerier som sålde frallor innan de öppnade osv. så mycket taxiåkande blev det den natten, men hur det myckna taxiåkandet kunde medföra att vi som betalade och inte bara taxichaufförerna tjänade pengar det fattade jag aldrig, men det kanske Lundis skulle kunna förklara för er?',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Blomman',
        qId: '28'

    },
    {
        question: 'Hur uppmuntrar du bäst pissnis?',
        answer: 'När vår son David var ett par/tre år var Lundis och Sysse hemma hos oss och då satt David, vår son, vid ett litet bord och fixade/lekte med papper. Lundis eller Sysse frågade honom vad han gjorde och då tittade han upp på dem och sa ”pissnis” som det var en självklarhet och Lundis och Sysse skrattade gott medan Elisabet och jag undrade förundrat vad detta kom ifrån. Några dagar där efter ringer det på dörren och där står Lundis och Sysse oanmälda med mängder av påsar i händerna. Där fanns allt som behövdes för att fortsätta göra ”pissnis”, det intygade Lundis som vid den tiden hade börjat lyckas bra med det själv. Det var stämplar, bläck, papper att stämpla på och mängder, verkligen mängder av monopolpengar. Och en kort tid efter detta så hade vi väl inte en yta i vårt hem som inte var stämplad….',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Blomman',
        qId: '29'

    },
    {
        question: 'Hur ”stör” du dina grannar så att de inte klagar, utan istället blir glada?',
        answer: 'Genom "Johans fantastiska skratt, som hördes genom väggen."',
        correct: '',
        points: 1,
        decade: '2000',
        author: 'Line, Bertil och Louise Cassemar',
        qId: '30'

    },
    {
        question: 'Vad måste man ha när man tankar båten?',
        answer: 'Minns när jag skulle få skjuts till Sandhamn med båten, och vi skulle tanka på vägen, då tyckte Johan att då måste man ha en glass, när man tankar.',
        correct: '',
        points: 1,
        decade: '2015',
        author: 'Oscar Wieslander',
        qId: '31'

    },
    {
        question: 'Med vilken familjemedlem skulle Johan kunna ha ett lugnt och trevligt samtal, där båda lyssnar och inte tar sig själva på alltför stort allvar?',
        answer: 'Det faktum att du fyller 60 år innebär att det var tio år sedan jag var på din 50 årsfest på Lokal och några vänner till dig trodde att jag var din dotter. Det framgick dock inte om de tyckte att jag var lik dig eller inte. Men om jag får säga det själv tycker jag att det finns vissa likheter mellan oss. Vi båda är lugna, bra på att lyssna och tar inte oss själva eller livet på alltför stort allvar.',
        correct: '',
        points: 1,
        decade: '2010',
        author: 'Lollisen',
        qId: '32'

    },
    {
        question: 'Vad gör man på Värtan bredvid en surfski?',
        answer: 'Ute på Värtan för några år sen. Jag i surfski bredvid 😀',
        correct: '',
        points: 1,
        decade: '2010',
        author: 'Johan Fant',
        qId: '33',
        img: './../pictures/fant.jpg',
        altText: '',
        imgText: null

    },
    {
        question: 'Vad krävs för att en ambulans ska börja krypköra?',
        answer: 'Ett starkt barndomsminne av Johan är nog ändå när han hade cyklat omkull i Näsby Alle. Han svimmade av och någon ringde ambulans. När ambulansen kom hade J vaknat och vägrade följa med. Han gick tillbaka till Vedettvägen med ambulansen krypkörande bakom honom. Jag var i lekparken den dagen och någon kompis kom och berättade att det stod en ambulans utanför vårt hus. Jag sprang hem och där i huset var J arg som ett bi, han skulle minsann inte åka med någon ambulans. Mamma lyckades till slut övertala honom och de åkte till KS. Hjärnskakning och lite återhämtning så var han på banan igen.\nDet hände mycket kring J hela tiden, han var väldigt fysisk och våghalsig som liten, gjorde sig ofta illa. Var i slagsmål ibland. Var ofta hos sjukvården. Men oj vad snäll han var som storebror !',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Tina',
        qId: '34'

    },
    {
        question: 'Kan du något ord på grekiska? Om ja: vilket?',
        answer: 'Det var dagen då familjerna Land-i-sikte tillsammans med Lundmännen avstod från Juttas middagsservering på ön Koufonissi och begav sig ut på jakt efter en äkta grekisk fiskrestaurang.\n\nFörväntningarna var på topp och hungern i både små och stora magar knorrande. Efter evighetslång väntan vid det allt kyligare utomhusbordet kom så äntligen maten. På var tallrik låg endast en enda liten grillad fiskusling men helt utan vare dig sås, grönsaker eller potatis... ilska o besvikelse blandades med skrik o svordomar från gästerna. ”Batata-Batata, var i hulsike är potatisen”, hördes det! \n\nTjohoo, kul, springnota, ropade Sysse o Thomas!! Ut ur restaurangen rusade så de båda familjerna!\n\n”Polisen-polisen!!” fräste restaurangägaren när middagsgästerna smet!! Från ingenstans dök Koufonissis svar på konstaplarna Kling och Klang upp! ”Stopp i lagens namn!”\n\n Som tur var stegade den ende vuxne i rummet fram: räddaren i nöden, Johan Lundman, och såg till att tala såväl barn, som vuxna liksom poliser och restaurangägare till rätta. Ordningen återställdes, rättvisa skipades och samtliga gäster kunde gå hem och få en god natt sömn, förvisso med fortfarande knorrande och minst sagt hungriga magar.....\n\n.... men ett kul äventyret o något skoj att minnas blev det!\n\nKram från Landisarna',
        correct: '',
        points: 1,
        decade: '2000',
        author: 'Landegrenarna, Landisarna',
        qId: '35'

    },
    {
        question: 'Hur retar man bäst en polisbåt och dess manskap?',
        answer: 'Det var på den tiden då både pappor och barn kunde roas av enkla men skojiga spänningsmoment ute i skärgården. Nuförtiden är det nog bara papporna som roas av dessa små hyss....!!\nNåväl: Familjerna Lundman och Landgren, ”grannar på landet”,  åkte ofta iväg på båtutflykt till trevliga små skärgårdsöar för picknick, korvgrillning och lite äventyr, då familjernas alla barn var i yngre men lämpliga åldrar.\nUtresan från familjernas olika kajplatser var oftast lugna men fyllda av förväntan. Efter ankring och tilläggning vid kvällens picknickö förflöt äventyrskvällarna med gott att äta, smaskigt att dricka, skratt och härligt stimmigt umgänge.\nMen.... det var först vid hemresan det riktigt actionfyllda äventyret fick sitt crescendo. Landgrenarna, med sin blanka o robusta ”Polisbåten Barbie”, utrustad med 30 mullrande hästkrafter, tog ofta täten. Det dröjde dock inte särskilt länge innan Lundmännens hypersnabba Buster, med 50 fasansfulla hästkrafter baktill, närmast flög förbi polisbåten, då fjärden öppnat upp sig. En liten knick med ratten och plötsligt var Busterfaran gömd bakom närmaste utskjutande skärgårdklippa!\nNär polisbåten minst anade faran, for Torpedbustern ut från sitt gömställe, kvickt som en kanonkula, för att dra upp svall så att den blanka ”30-hästar’n” kom i förfärligt farlig gungning. Förskräckelse och förargelse bredde ut sig bland polisbåtens manskap! Detta hindrade emellertid inte den fasansfulla Bustern från att upprepa samma hemska procedur gång på gång på gång.... under hela hemresan. Det var ju Kapten Johan som förde befälet!\nMed både list och finess lät kapten Johan sig aldrig tröttas, ej heller lät han sig någonsin infångas av polisbåten! Stackars stackars polisbåtens manskap, de hann aldrig ikapp den stolte och överlägsne kapten Johan.\nSå var det under somrarna förr....!!',
        correct: '',
        points: 1,
        decade: '2000',
        author: 'Landegrenarna, Landisarna',
        qId: '36'

    },
    {
        question: 'Vem drog Johan med hjälp av Zappa upp från mainstreamträsket?',
        answer: 'Johan introducerade Zappa till mig som jag än idag lyssnar på och håller högt. Innerligt tacksam och det gav mig en början på vägen bort från mainstream musikträsket👍',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'John V Bergen',
        qId: '37'

    },
    {
        question: 'Vattnet, vinden, tajmningen – det är det segling handlar om, eller hur?',
        answer: 'Alla säger ju "Navigare necesse est", även jag tills jag träffade Johan & Norden... Lärde mig då att det inte handlar om segling utan det viktigaste var att festa, bada med kläderna på och att ligga i hamn👌',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'John V Bergen',
        qId: '38'

    },
    {
        question: 'Vilken är Zappa-låten som ickefanatiker faktiskt skulle kunna låttexten till?',
        answer: '"Whats new in baltimore". Eller?',
        correct: '',
        points: 1,
        decade: '2020',
        author: 'LiKaRoS',
        qId: '38'

    },
    {
        question: 'Året är 1997, det är sommar, och du ska hjälpa en 9-åring att spela in ett kassettband. Från vilka (cd)album väljer du låtarna?',
        answer: '"Brown Album" -Primus och "The Fat of the Land" -The Prodigy',
        correct: '',
        points: 1,
        decade: '1990',
        author: 'LiKaRoS',
        qId: '39'
    },
    {
        question: 'Heter det pommes eller pommes frites?',
        answer: 'Pommes!',
        correct: '',
        points: 1,
        decade: '2020',
        author: 'LiKaRoS',
        qId: '40'

    },
    {
        question: 'Hon beställde Dry Martini, var din bordsdam, på en fest i Djursholms värdshus, 1981. Vem är hon?',
        answer: ' ',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Louise Robinson',
        qId: '41',
        img: './../pictures/louiseR.jpg',
        altText: '',
        imgText: null

    },
    {
        question: 'Hur såg Johans studentinbjudan ut?',
        answer: 'Inbjudan till Johans studentfest! 😀Those where the days!',
        correct: '',
        points: 1,
        decade: '1970',
        author: 'Anna och Micke Kramers',
        qId: '42',
        img: './../pictures/kramers79.jpg',
        altText: 'Studentinbjudan.',
        imgText: null
    },
    {
        question: 'Vad är Jux?',
        answer: '...',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Bertil',
        qId: '43',
    },
    {
        question: 'Omvärldsanalytiker. Bra resekamrat. Enligt vilka? ',
        answer: 'Omvärldsanalytiker\nJohan vill ju gärna hålla koll på världen, och gör det som en sann ekonom med ett scorecard.\nHans eget träningspoängsystem, är det mest långvariga och excelarket som skulle förutsäga när det var dags för Sysse att åka till förlossning och föda.\n\n \nBra resekamrat\nEn fantastisk bra reskamrat. Okrånglig och positiv och kul att resa, har det åkts på otaliga skidresor, segling gotlandsupptäckt och nu senast Spanien och Val D’Isere. ',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Bertil och Carin',
        qId: '44',
    },
    {
        question: 'Vill du ha en färg-TV?',
        answer: 'En härlig Ja sägare.\nEn riktigt härlig egenskap har Johan i sin positiva inställning till idéer som kommer upp och förslag.\nJohan säger JA, det blir mycket kul.\nMen det kan också bli blodvite och svett, när man hakar på skråa med Bertil. Dock aldrig riktigt osäkert som off pist med Fredrik.\n Går också så långt att han tar emot gåvor utan att vilja ha dem, tex Färg-TVn.',
        correct: '',
        points: 1,
        decade: '1980',
        author: 'Bertil och Carin',
        qId: '44',
    },
  
];

export default questions; 
