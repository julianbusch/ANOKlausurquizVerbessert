import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private alleFragen = {
  'Frage1: Zeichne die vierschichtenarchitektur für webanwendungen:': 'Visualisierung (client tier)\tweb browser\t\tHTML, CSS, JS, ECMA, Angular\n' +
    'Präsentation (presentation)\tWeb Server\t\tNodejs, Groovy & grails, JSP, JSF, Servlets\n' +
    'Anwendungslogik (buisness)\tApplication Server\tJava, Nodejs, Groovy\n' +
    'Datenhaltung (ressource)\tDatenbank Server\tSql, mariadb, mysql',
    'Frage2: Zeichne dynamische webseiten:': '  ablauf: client fordert HTTP request per URL, bekommt HTML page als response, daten aus DB\n',
    'Frage3: Was ist Javascript?': 'Programmiersprache des Browsers, wird verwendet um das DOM Document Object Model zu manipulieren, mit javascript kann man\n' +
      'Web/mobile apps erstellen. Javascript kann man im Browser verwenden, oder mit node einen Webserver schreiben.',
    'Frage4: Was ist ECMAscript?': 'European Computer Manufacturers Association\n' +
      'spezifiziert Sprachkern von Javascript, stellt standard für alle browser dar, damit die gleiche seite auf unterschiedlichen browsern\n' +
      'gleich aussieht. wird auch außerhalb des browsers verwendet, zb nodejs und typescript',
    'Frage5: Was ist Typescript?': 'wird beim compelieren zu javascript, unterstützt objektorientierte programmierung und typsicherheit\n' +
      '(klassen, vererbung, polymorphie, interfaces, enums, generics statische und dynamische datentypen)',
    'Frage6: Was ist Nodejs? nenne vorteile von nodejs': 'basiert auf ECMAscript,  wird verwendet, um serverseitig zu programmieren (backend)\n' +
      'wird verwendet, um javascript/ECMA script code außerhalb des browsers auszuführen,\n' +
      'optimiert für SKALIERBARE Netzwerkanwendungen, integrierter webserver\n' +
      'enthält paketmanager npm\n' +
      '\n' +
      '  vorteile: Schnelle Restful Webservice implementation durch Express, Packagemanagement, Rapid Prototyping',
    'Frage7: Was ist Angular?': 'Front end (javascript) framework für single page applications\n' +
      'entwickelt von Google, basiert auf typescript\n' +
      'angular anwendung besteht aus Komponenten, folgen dem MVC pattern:\n' +
      'Model: ts/domainclass\n' +
      'View: html/css template\n' +
      'controller: ts/serviceclass\n' +
      'enthält RESTClient, Router',
    'Frage8: Vorteile von Angular:': 'Umfrangreiches Layout,\n' +
      'Single Page Application durch Routing,\n' +
      'hohe Performance, ohne nachladen,\n' +
      'Drag&Drop,\n' +
      'asynchroner RESTClient\n' +
      'Rapid Prototyping, Agil,\n' +
      'Typsicherheit durch typescript,\n' +
      'convention over configuration,\n' +
      'komponenten,\n' +
      'dependency injection,\n' +
      'asynchron,\n' +
      'routing',
    'Frage9: Zeichne Grafiken Angularjs (Folie 16), Angular (Folie 17) und Nodejs (Folie 18)': 'Blatt papier:\n' +
      'Angular JS: Javascript basiert (JS + ECMA)\n' +
      'Angular: Typescript basiert (ECMA + Typescript)\n' +
      'Nodejs: ECMA basiert (ECMA)',
    'Frage10:statische und dynamische typisierung:': 'statisch: typ wird angegeben,\n' +
      'dynamisch: typ wird erkannt aus initialisierung',
    'Frage11:nenne alle elementaren Datentypen von Typescript': 'string, number, boolean, symbol, null, undefined',
    'Frage12: nenne alle NICHTelementaren Datentypen von Typescript': 'Object, Array, Any, Tupel',
    'Frage13: kann man in Typescript Strings mit == != === !=== usw vergleichen?': 'ja, weil elementarer Datentyp, char gibt es nicht, ist in Typescript string mit 1 Zeichen',
    'Frage14: Was ist ein Template String?': ' mit Template String kann man Berechnete Ausdrücke, sowie den Wert von Variablen\n' +
      '  in einem String verwenden\n' +
      '  Backquote ` auf Tastatur: Shift-Accent Space\n' +
      '  kann über mehrere Zeilen gehen kann berechnete Ausdrücke (Closures) enthalten',
    'Frage15: erkläre in eigenen worten den Datentyp any': 'mit any ist dynamische typisierung möglich, das heißt der Datentyp ändert sich abhängig des zugewiesehnen Wertes\n' +
      '  außérdem sind sämtliche mit dem zugewiesenen Datentyp kompatiblen Methodenaufrufe möglich und auch nur diese,\n' +
      '  weiterhin kann man in einem Array vom Typ any unterschiedliche Datentypen im gleichen Array speichern',
    'Frage16: erkläre die Unterschiede zwischen den Datentypen object und any': 'any kann einen beliebigen Typ aufnehmen, object nur nicht elementare Datentypen\n' +
      '  any ist gleichwertig, wie garkein Datentyp angegeben,\n' +
      '  any hat Zugriff auf Attribute und Methoden abhängig des Typs,\n' +
      '  aufruf von nicht vorhandenen Methoden und Attributen führt zum Laufzeitfehler\n' +
      '\n' +
      '  object lässt nur aufrufe von Methoden und Attributen der Klasse object zu unabhängig vom objecttyp',
    'Frage17: gebe ein Beispiel für ein Dynamisch typisiertes Array in Typescript': 'let profs = [\'Specht\', \'Gröschel\', \'Smits\']; // dynamisch typisiert\n' +
      '\n' +
      'Elementzugriff:\n' +
      'let prof = profs[0];',
    'Frage18: gebe zwei Beispiele für ein statisch typisiertes Array in Typescript': 'let profs: string[] = [\'Specht\', \'Gröschel\', \'Smits\']\n' +
      'let profs2: Array<$string> = [\'Specht\', \'Gröschel\', \'Smits\']\n' +
      '  Aufruf:let prof: string = profs[0]\n' +
      'let prof2: string = profs2[0]',
    'Frage19: erkläre, was ein Tupel ist und gib ein Beispiel': 'statisch typisiert, jedes Element bekommt eigenen Datentyp, deswegen Anzahl einträge vorgegeben.\n' +
      '\n' +
      '  Deklaration:\n' +
      '  let preis:[number, string]=[55, "euro"];\n' +
      '\n' +
      '  Elementzugriff:\n' +
      '  let waerung: string= preis[1]; // statisch\n' +
      '  let waerung2=preis[1];        //dynamisch',
    'Frage20: erkläre, was ein assoziatives Array ist und gib ein Beispiel': 'besteht aus Key Value paaren, Key ist vom Typ string, key braucht kein "" / \'\',\n' +
      '  value kann beliebigen typ haben, sieht aus wie JSON\n' +
      '\n' +
      '  dynamisch typisiert:\n' +
      '  const autokennzeichen = {{\n' +
      '  KA: "Karlsruhe",\n' +
      '  S: "Stuttgart\n' +
      '  };\n' +
      '\n' +
      '  statisch typisiert:\n' +
      '  const autokennzeichen : {[key:string]:string}= {{\n' +
      '  KA: "Karlsruhe",\n' +
      '  S: "Stuttgart\n' +
      '  };\n' +
      '\n' +
      '  Elementzugriff mit Array:\n' +
      '  let stadt= autokennzeichen["KA"];\n' +
      '\n' +
      '  Elementzugriff als objekt:\n' +
      '  autokennzeichen.KA;',
    'Frage21: gebe ein Beispiel für die deklaration und aufruf einer enum': 'enum Color{{\n' +
      '  Red,\n' +
      '  Green,\n' +
      '  Blue\n' +
      '  }     // kein ; am ende, wie bei klassen\n' +
      '\n' +
      '  deklaration von enum variablen:\n' +
      '  let c: Color= Color.Red; //statisch\n' +
      '  let c2=Color.Green;  //dynamisch\n' +
      '\n' +
      '  Zugriff:\n' +
      '  Color[c]; // == Red\n' +
      '\n' +
      '  Aufzählungen von enums:\n' +
      '  enum Monat{{\n' +
      '  Januar =1,  // 1\n' +
      '  Februar, // bekommt automatisch 2\n' +
      '  März = 4 //wäre 3, ist aber nun 4\n' +
      '  }',
    'Frage22: gebe Beispiele für die Anwendung der Datentypen null und undefined': 'beispiel null:\n' +
      'name: string|null;\n' +
      '\n' +
      'beispiel undefined:\n' +
      '  name: string|undefined;',
    'Frage23: gebe Beispiele für die Typumwandlung von string nach number und von number nach string': 'string nach number:\n' +
      '  let s:string ="2";\n' +
      '  let n: number = +s;\n' +
      '\n' +
      '  number nach string:\n' +
      '  let n:number=2;\n' +
      '  let s:string=""+n;\n' +
      '\n' +
      '  number nach string mit Template string:\n' +
      '  let n:number=2;\n' +
      '  let s:string=`${{n}`;',
    'Frage24: gebe Beispiele für die typkonvertierung von string nach boolean und boolean nach string': 'string nach boolean (durch vergleich mit true):\n' +
      '  let s:string="false";\n' +
      '  let b:boolean=s=="true";\n' +
      '\n' +
      '  string nach boolean (durch vergleich mit true und false):\n' +
      '  let s:string = "false";\n' +
      '  let b:boolean=s=="true"? true:s=="false"? false:undefined;\n' +
      '\n' +
      '  boolean nach string:\n' +
      '  let b:boolean:"false";\n' +
      '  let s:string=""+b;\n' +
      '\n' +
      '  boolean nach string mit template string:\n' +
      '  let b:boolean="false";\n' +
      '  let s:string=`${{b}`;',
    'Frage25: gebe ein Beispiel für einen typecast': 'let specht:Dozent=new Professor("Thomas", "Specht", "SPE");\n' +
      '  let raum:string=specht.raum; // compilefehler, klasse Dozent hat kein attribut raum, daher typecast notwendig\n' +
      '  let raum2:string=(specht as Professor).raum; //typecast mit as\n' +
      '  let raum3:string=(<>Professor>specht).raum; // funktioniert auch\n' +
      '  let raum4:string=(Professor)specht.raum; //funktioniert NICHT in typescript, nur in zb java',
    'Frage26: ekläre var, let und const': 'var vermeiden, da sichtbar außerhalb des blocks.\n' +
      '  let ist nur in lokalem bereich sichtbar, wie lokale variable.\n' +
      '  const konstante, muss initialisiert werden und kann nicht geänert werden, meistens empfehlenswert',
    'Frage27: gebe Beispiele für die Destrukterierung von Arrays und Objekten': 'Array:\n' +
      '  let vornamen:string[]=["hans", "peter", "klaus"];\n' +
      '  let [hs, pt, kl]=vornamen; // dynamisch typisiert\n' +
      '  let [hs2, pt2, kl2]: string[]=vornamen; //statisch typisiert\n' +
      '\n' +
      '  Objekt:\n' +
      '  let specht:Professor= new Professor("Thomas", "Specht", "SPE");\n' +
      '  let {{\'{\'}}vorname, nachname}=specht; //deklaiert vorname und nachname',
    'Frage28: gebe Beispiele für den spread operator, mit dem man Arrays zusammenführen kann': 'let vornamen:string[]=["hans", "peter", "klaus"];\n' +
      '  let vornamen2:string[]=["eren", "armin", "reiner"];\n' +
      '  let summe:string[]=[...vornamen, ...vornamen2, "manfred"]; //statisch typisiert, geht auch mit assoziativen arrays',
    'Frage29: schreibe eine einfache typescript klasse, mit optionalem attribut, readonly attribut und konstruktor.gebe weiterhin die verkürzte schreibweise für einen construktor an': 'class Professor{{\'{\'}}\n' +
      '\n' +
      '  vorname:string;\n' +
      '  nachname:string;\n' +
      '  kuerzel?:string;\n' +
      '  readonly raum?:string;\n' +
      '\n' +
      '  constructor(vorname:string, nachname:string, kuerzel:string, readonly raum?:string){{\'{\'}}\n' +
      '  this.vorname=vorname;\n' +
      '  this.nachname=nachname;\n' +
      '  this.kuerzel=kuerzel;\n' +
      '  this.raum=raum;\n' +
      '  }\n' +
      '\n' +
      '\n' +
      '\n' +
      '\n' +
      '  }\n' +
      '\n' +
      '  oder kürzer:\n' +
      '  class Professor{{\'{\'}}\n' +
      '\n' +
      '  constructor(public vorname:string, public nachname:string){{\'{\'}}\n' +
      '  // parameter attribute können durch schlüsselworte public, private, protected, oder readonly hinzugefüt werden.\n' +
      '  // deswegen brauchen wir hier keine attribute in die klasse zu schreiben, oder sie mit this. zuzuweisen\n' +
      '\n' +
      '  }\n' +
      '  }\n',
    'Frage30: gebe ein Beispiel für Getter und Setter': 'class Professor{{\'{\'}}\n' +
      '  private _raum: string; // _ muss vor die variable, damit kein namenskonflikt mit der get methode raum() entsteht\n' +
      '\n' +
      '  constructor(public vorname:string, public nachname:string, raum?:string){{\'{\'}}\n' +
      '  this._raum=raum;\n' +
      '  }\n' +
      '\n' +
      '  get raum():string{{\'{\'}}\n' +
      '  return this._raum; / return `Raum ${{\'{\'}} this._raum}`;  // rechts mit template string\n' +
      '  }\n' +
      '\n' +
      '  set raum(neuerRaum: string){{\'{\'}}\n' +
      '  this._raum=neuerRaum;\n' +
      '  }\n' +
      '  }\n' +
      '\n' +
      '  verwendung der getter und setter:\n' +
      '  let specht:Professor=new Professor("Thomas", "Specht", "109");\n' +
      '  specht.raum="10000"; // dies ruft den setter auf und ändert den wert\n' +
      '  document.body.innerHTML=specht.raum; // dies ruft den getter auf, also kommt in das DOM der neue Wert "10000"',
    'Frage31: gebe ein paar Beispiele für vordefinierte Methoden der Basisklasse object (wichtig object klein, Object vermeiden)': 'constructor()   //parameterloser standard konstruktor\n' +
      '  toString():string   // macht string aus object, wie in java\n' +
      '  toLocaleString() // macht string abhängig vom Land, zb Datum\n' +
      '  valueOf():Object // gibt primitiven datentyp zurück\n' +
      '                   // Primitive-Wert des Objekts bei Boolean, Number, String\n' +
      '                   // Alle Attributwerte bei Objekten\n' +
      '  hasOwnProperty(attrName:string):boolean // True, wenn Attribut attrName vorhanden\n' +
      '          // und nicht undefined',
    'Frage32: erkläre Duck Typing': 'Ducktyping bedeutet, dass man einer variable\n' +
      '  let b: T(TypderVariablen) =  z (zugewiesener Wert)\n' +
      '  einen Wert ohne Datentyp / von anderem datentyp zuweisen kann, wenn alle plichtattribute/methoden, die T voraussetzt, in Z vorhanden sind.\n' +
      '  optionale attribute und methoden können weggelassen werden, allerdings dürfen in z keine zusätzlichen attribute und methoden hinzugefügt werden',
    'Frage33: nenne die Unterschiede von Typescript Klassen und Java Klassen': 'construktor: ist wie in java, allerdings heißt er immer constructor().\n' +
      '  vererbung: wie in Java ist keine mehrfachvererbung möglich, allerdings müssen konstruktoren von unterklassen immer super() aufrufen\n' +
      'interface-implementierung: ist wie in java\n' +
      '  public/protected/private,public ist default, nicht protected wie in java\n' +
      '  protected bezieht sich ausschließlich auf Vererbung, beinhaltet im Gegensatz zu Java nicht die Klassen des selben Moduls sonst wie in Java\n' +
      '  statische Attribute und Methoden: Schlüsselwort static, wie in Java\n' +
      'abstrakte Klassen und Methoden: Schlüsselwort abstract, wie in Java',
    'Frage34: schreibe eine beispiel function fürs addieren zweier werte schreibe dann noch 3 functions mit jeweils 1 optionalem parameter, 1 default parameter und 1 rest parameter': 'function addiere(a:number, b:number):number{{\'{\'}}\n' +
      '  return a+b;\n' +
      '  }\n' +
      '\n' +
      'optionaler parameter:\n' +
      '  function addiere(a:number, b:number, c?:number):number{{\'{\'}}...} // optionaler param muss immer als letztes in der Liste stehen,\n' +
      '  //wenn beim aufruf nicht angegeben, ist default undefined\n' +
      '\n' +
      '  default parameter:\n' +
      '  function addiere(a:number, b:number, c:number=0):number{{\'{\'}}...} //default wert wird benutztm wenn parameter nicht angegeben, statt undefined bei optional\n' +
      '  // musss ebenfalls immer als letztes in der liste stehen\n' +
      '\n' +
      '  rest parameter:\n' +
      '  function addiere(a:number, ...rest:number[]):number{{\'{\'}}...}  // rest ist ein array mit beliebig vielen optionalen parametern, kann mit schleife durchiteriert und ausgelesen werden.',
    'Frage35: gebe ein Beispiel für ein Klassenloses JSON Objekt': 'const p: Professor = {{\'{\'}}vorname: \'Thomas\', nachname: \'Specht\', kuerzel: \'SPE\'}\n' +
      '   Objekt ≙ assoziativem Array\n' +
      '• Schlüssel: Attributname\n' +
      '• Wert: Attributwert\n' +
      '\n' +
      ' als JSON-Objekt zum Datentransfer zwischen RESTful Web Service + Client',
    'Frage36: ekläre generics und gib ein beispiel in typescript': '  ein oder mehrere kommagetrennte Typparameter\n' +
      'hinter dem Klassennamen in <> angeben\n' +
      '\n' +
      'let teilnehmer: Queue<{{\'string\'}}> = new Queue<{{\'string\'}}>(\'Michael\', \'Gabi\');',
    'Frage37: erkläre union types und gebe ein beispiel in typescript': 'auflistung von mehreren datentypen, getrennt durch |, kann in variablen, für unterschiedliche, oder gleiche datebntypen verwendet werden.\n' +
      '  beispiel gleicher datentyp:\n' +
      '  let geschlecht: \'m\' |\'w\' |\'d\'; //strings\n' +
      '  let anoNote: 1.0 | 1.3 | 1.7 | 2.0 | 2.3 | 2.7 | 3.0 | 3.3 | 3.7 | 4.0 | 5.0; // numbers\n' +
      '\n' +
      '  Funktionsdefinition mit Union Type und Generic:\n' +
      'function maxi2<{{\'T extends (number | string)\'}}>(x: T, y: T): T {{\'{\'}} //unterschiedliche datentypen, geht auch mit null und undefined\n' +
      '  return x > y ? x : y;\n' +
      '}\n' +
      '\n' +
      '  class Professor {{\'{\'}}\n' +
      '  vorname: string;\n' +
      '  nachname: string;\n' +
      '  kuerzel: string|null;\n' +
      '  constructor(vorname: string, nachname: string, kuerzel: string|null = null) {{\'{\'}}\n' +
      'this.vorname = vorname;\n' +
      'this.nachname = nachname;\n' +
      'this.kuerzel = kuerzel;\n' +
      '}\n' +
      '  }',
    'Frage38: erkläre typ aliase und gebe ein beispiel': 'ermöglicht eigene datentypen\n' +
      '  syntax:\n' +
      '  type aliasname = typdefinition\n' +
      '\n' +
      '  beispiel:\n' +
      '  type note = 1.0|1.3|1.7;\n' +
      '  let annonote:note = 1.7;\n' +
      '  type nullablestring = string|null;\n' +
      '  let raum: nullablestring;',
    'Frage39: erkläre, was ein typescript modul ist': 'typescript datei wird zum modul, wenn auf oberster ebene ein expor/import befehl ist. typescript modul = eine typscript datei, mit eigenem scope. typescript module gibt es erst seit ECMAscript 2015 (es2015).\n' +
      '  wenn man die javascript datei als modul verwenden will muss man dat attribut {{\'type="module"\'}} beim einbinden der js datei in die index html schreiben.\n' +
      '  außerhalb eines moduls ist nur sichtbar, was mit export gekennzeichnet ist, hierzu gibt es 2 möglichkeiten:\n' +
      '\n' +
      '  direkt an der klasse:\n' +
      '  z.B.: export class Dozent {{\'{\'}} /* ... */ }\n' +
      '\n' +
      '  als sammlung:\n' +
      '  export {{\'{\'}} ding1, ding2, ding3 };\n' +
      '  z.B.: export {{\'{\'}}Dozent, Professor, Lehrbeauftragter};\n' +
      '\n' +
      '  wenn eine typescript datei eine klasse importiert wird sie auch zum modul. Import immer als .js datei, nicht .ts. bsp:\n' +
      '  import {{\'{\'}} Dozent, Professor, Lehrbeauftragter } from \'./dozent.js\'\n' +
      '\n' +
      '  wenn man alle exporte aus einem modul importieren will, benutzt man\n' +
      '  import * as aliasname from "";\n' +
      '\n' +
      '  z.B.: import * as dozenten from \'./dozent.js\';\n' +
      '\n' +
      '  aufruf: mit aliasname.Klassenname\n' +
      '   Beispiel: let gerten: dozenten.Professor = new dozenten.Professor( /* ... */ );',
    'Frage40: erkläre, was ein default export ist und gib ein beispiel': 'default export wird verwendet, wenn modul nur 1 klasse exportiert.\n' +
      '  syntax: export default classname {{\'{\'}} }\n' +
      '\n' +
      '  import einer default klasse: geht nur mit aliasname:\n' +
      '  beispiel: import aliasname from "... .js";',
    'Frage41: erkläre, was ein dekorator ist und gib beispiele': 'gleichwertig annotation= schlüsselworte. keine vorgefertigten dekoratoren in typescript, dafür aber in angular.\n' +
      '\n' +
      '  Beispiel:\n' +
      '  Klasse kennzeichnen als Angular-Komponente: @Component(), Angular-Modul: @NgModule()\n' +
      'Methode kennzeichnen als Event-Listener: @HostListener()\n' +
      'Attribut kennzeichnen als Eingabeattribut: @Input()\n' +
      'Parameter kennzeichnen als automatisch befüllter Konstruktor-Parameter: @Inject\n' +
      '\n' +
      '  @Injectable({{\'{\'}} // JSON-Objekt als Dekorator-Parameter\n' +
      'providedIn: \'root\'\n' +
      '})',
    'Frage42: nenne 3 Vorteile von Dekoratoren': '1: konfiguration im quellcode, statt konfigurationsdatei, somit verzicht auf fehleranfälliges xml\n' +
      '\n' +
      '  2: verzicht auf reine markierungsschnittstellen\n' +
      '\n' +
      '  3: verzicht auf unnötige vererbung',
    'Frage43: erkläre, was eine closure ist und gib beispiele und zeichne dann das closure ablauf diagramm': '  closure= arrow function (javascript) & lambda expression (java)\n' +
      '  closure= anonymer codeblock, kann wie function aufgerufen werden, mit parametern und ist ein object, kann also in variablen gespeichert werden.\n' +
      '  zweck: vermeidung anonymer innerer klassen mit nur 1 methode\n' +
      '  syntax: () => {{\'{\'}} }  //bevorzugt\n' +
      '  oder: function // nicht benutzen\n' +
      '\n' +
      '  Beispiele:\n' +
      '  dynamisch: (param1, param2) => {{\'{\'}} let ergebnis = …; return ergebnis; }\n' +
      '  mit nur 1 param: param => {{\'{\'}} let ergebnis = …; return ergebnis; }\n' +
      '\n' +
      '  statisch: (param1: number, param2: number): number =>\n' +
      '  {{\'{\'}} let ergebnis: number = …; return ergebnis; }\n' +
      '\n' +
      '  statischer closure typ (als variable):\n' +
      '  const funcvar: (n: number) => number = (n: number): number => {{\'{\'}} return n+5; }\n' +
      '\n' +
      '  diagramm: deklaierer->closure->aufrufer\n' +
      '  1. deklaierer erstellt closure\n' +
      '  2. methode mit closure als parameter aufrufen\n' +
      '  2.1 closure ausführen',
    'Frage44: nenne den unterschied zwischen == und === bzw != und !=== in typescript für elementare datentypen': 'eigentlich:\n' +
      '== und != vergleicht auf inhalt\n' +
      '  === und !=== vergleicht auf inhalt und datentyp\n' +
      '\n' +
      '  in angular jedoch:\n' +
      '  === und !=== machen das gleiche, vergleichen nur auf inhalt, vergleich mit unterschiedlichem datentypen gibt compilerfehler\n' +
      '\n' +
      '  trotzdem: immer === und !=== verwenden.',
    'Frage45: gib beispiele für nummerierte (normale) arrays und assoziative arrays, sowie deren schleifendurchläufe für key/index und wert des arrays.': 'normales array:\n' +
      '  let vornamen:string[]=["hans", "peter", "klaus"];\n' +
      '  aufruf: let hans:string=vornamen[0];\n' +
      '\n' +
      '  for schleife mit index:  // 1 schleifendurchlauf pro belegtem index, indizes ohne wert werden übersprungen, index automatisch vom typ number KEYWORD IN = INDEX/KEY\n' +
      '  for(let index in vornamen){{\'{\'}}\n' +
      '  vorname=vornamen[index];\n' +
      '  }\n' +
      '\n' +
      '  for schleife mit wert: // 1 schleifendurchlauf pro index, unbelegte indizes liefern wert undefined KEYWORD OF = WERT\n' +
      '  for(let vorname of vornamen){{\'{\'}}\n' +
      '  console.log(vorname);\n' +
      '  }\n' +
      '\n' +
      '  assoziatives array:\n' +
      '  let profs:object={{\'{\'}}"SPE":"Thomas Specht", "JUL":"Julian Busch"};\n' +
      '\n' +
      '  aufruf: let specht:string=profs["SPE"];\n' +
      '\n' +
      '  for schleife mit key: analog zu for schleife mit index\n' +
      '\n' +
      '  for schleife mit value: erst mit key durchiterieren und dann nochmal mit key durchiterieren',
    'Frage46: was ist eine Domänenklasse? und gib ein beispiel': 'die Domänenklasse ist das Datenmodell der gesamtanwendung, ähnlich zu hibernate, darf keine functions neben dem construktor\n' +
      '  enthalten, weil man sonst die domänenklasse nicht mehr als JSON über den RESTfulWebservice schicken kann.\n' +
      '  die domainclass ist nicht Bestandteil einer Komponente\n' +
      '\n' +
      '  beispiel:\n' +
      '\n' +
      '  export class Professor{{\'{\'}}\n' +
      '  vorname:string;\n' +
      '  nachname:string;\n' +
      '  kuerzel:string;\n' +
      '  raum?:string;\n' +
      '  telefon?:string;\n' +
      '  }',
    'Frage47: was ist eine Angular Komponente und was sind ihre Bestandteile?': '  hat nur 1 bestimmte Aufgabe. hat mehrere Bestandteile. wird immer als ganzes verwendet, verbirgt innenleben vor außenwelt (information hiding) zugriff nur übe schnittstellen\n' +
      '  stellt GUI Komponenten der Anwendung dar\n' +
      'Bestandteile:\n' +
      '  (html, css)->View\n' +
      '  (ts, spec.ts)->ModelView\n' +
      '\n' +
      '  model ts ist nicht bestandteil einer komponente',
    'Frage48: erkläre den unterschied zwischen dem üblichen MVC pattern und dem MVVM (Model, View, ViewModel) in Angular': ' in Angular werden die Aufgaben des Controllers teilweise von angular übernommen:\n' +
      '  1. die Synchronisation des Models Mit der View (ViewModels) wird durch Darenbindung automatisiert.\n' +
      '  2. Die Navigation zwischen Komponenten läuft in Angular über Routing Regeln.\n' +
      '\n' +
      '  im Code:\n' +
      '  Model= ts domain class\n' +
      '  View= html template\n' +
      '  ViewModel=ts komponenten class\n' +
      '\n' +
      '  Bild:\n' +
      '  view (component style, html template)<-databinding->ViewModel(component ts)<-daten auslesn/ändern->Model(domainclass ts)',
    'Frage49: erkläre, was inperpolationsbindung ist und gib ein Beispiel': 'Zugriff in der View auf Attribute der ModelView, aufruf durch {{\'{{attributname (2 geschweifte klammern zu)\'}}\n' +
      '\n' +
      '\n' +
      '  beispiel:\n' +
      '  int typescript datei (ModelView):\n' +
      '  export class AppComponent {{\'{\'}}\n' +
      '  attributname = \'Attributwert\';\n' +
      '}\n' +
      '\n' +
      '  dazugehörige view (html template):\n' +
      '  "<"h1">"{{ \'{{attributname (2 geschweifte klammern zu)\'}}"<"h1">"',
    'Frage50: kommt noch': 'kommt noch'
  };
  private keyLaenge: number;
  private frage: string;

  private alteFrage: number;
  ngOnInit() {
    this.naechsteFrage();

  }

  leseFrage(): void {
    const keys: string[] = Object.keys(this.alleFragen);
    let next: number = this.alteFrage;
    this.keyLaenge = keys.length;
    if ( this.keyLaenge > 2) {
      while (next === this.alteFrage) {
        next = Math.floor(Math.random() *  this.keyLaenge - 1) + 1;
      }
    } else {
      next = Math.floor(Math.random() *  this.keyLaenge - 1) + 1;
    }
    this.alteFrage = next;
    const key: string = keys[next];
    this.frage = key;
  }

  naechsteFrage(): void {
    this.verbergeAntwort();
    this.leseFrage();
    document.getElementById('frage').innerHTML = `<p>${this.frage}</p>`;
    document.getElementById('lösung').innerHTML = `<p>${this.alleFragen[this.frage]}</p>`;
    if (this.frage === undefined) {
      document.open();
      document.write('<h1>Gratulation, du hast das Quiz erfolgreich beendet, wenn du erneut spielen möchtest, drücke F5</h1>');
      document.close();
    }

  }

  zeigeAntwort(): void {
    document.getElementById('lösung').style.display = 'block';
  }

  verbergeAntwort(): void {
    document.getElementById('lösung').style.display = 'none';
  }

  loescheFrage(): void {
    delete this.alleFragen[this.frage];
    this.naechsteFrage();
  }


}
