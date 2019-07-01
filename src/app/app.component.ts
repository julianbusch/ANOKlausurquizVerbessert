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
    'Frage50: gib die Grundstruktur einer Angular Komponente an': 'import {Component, OnInit} from \'@angular/core\';\n' +
      '  \n' +
      '@Component({\n' +
      '  selector: \'app-professor\', // stellt das xml tag dar, mitdem man die komponente im html template einer anderen komponente verwenden kann\n' +
      '  templateUrl: \'./professor.component.html\',\n' +
      '  styleUrls: [\'./professor.component.css\']\n' +
      '})\n' +
      '  \n' +
      'export class ProfessorComponent implements OnInit {\n' +
      '  \n' +
      '  constructor() { } // konstruktr ist zugang zur datenquelle (service) und nur für dependency injection\n' +
      '  \n' +
      'ngOnInit() { } // initialisiert attribute, sollte man nicht im konstruktor machen\n' +
      '}',
    'Frage 51: erkläre den unterschied zwischen typescript modul und angular modul und gib ein beispiel': 'Typescript modul= 1 ts datei, zb ProfessorComponent.ts, Angular Modul= besteht aus Typescript Modulen/ angular komponenten, dekorator: @NgModule\n' +
      '\n' +
      '  bsp:\n' +
      '  import {BrowserModule} from \'@angular/platform-browser\';\n' +
      'import {NgModule} from \'@angular/core\'; // Angular-Module importieren\n' +
      'import {FormsModule} from \'@angular/forms\';\n' +
      'import {AppComponent} from \'./app.component\'; // Komponenten importieren\n' +
      'import {ProfessorComponent} from \'./professor/professor.component\';\n' +
      '@NgModule({\n' +
      '  declarations: [ // in diesem Modul enthaltene Komponenten\n' +
      '  AppComponent,\n' +
      '  ProfessorComponent\n' +
      '  ],\n' +
      '  imports: [BrowserModule], // importierte Angular-Module\n' +
      '  providers: [], // in diesem Modul enthaltene Services\n' +
      '  bootstrap: [AppComponent] // Boot-Komponente (nur für Root-Modul App\n' +
      '})\n' +
      'export class AppModule { }',
    'Frage 52: erkläre was ein service in angular ist': 'ein service in angular stellt dienste für andere services und komponenten bereit\n' +
      '  in der regel singleton instanz, i service für alle nutzer.\n' +
      '  wird mit @Injectable annotiert, damit man zugriff auf den service per dependency injection hat',
    'Frage 53: erkläre den begriff Inversion of Control (OpC)': 'Framemwok bestimmt kontrollfluss,\n' +
      '  komponenten durchlaufen lebenszyklus,\n' +
      '  framework instanziert komponente bei bedarf,\n' +
      '  framework löst abhängigkeiten auf (per dependency injection),\n' +
      '  hauptprogramm ist bestandteil des frameworks,\n' +
      '  wir schreiben keun hauptprogramm mehr,\n' +
      '  wir schreiben konstruktoren und methoden,\n' +
      '  die vom framework aufgerufen werden,\n' +
      '  wir rufen konstruktor des services nicht selbst auf,\n' +
      '  hollywood prinzip: dont call us - we call you',
    'Frage 54: erkläre dependency injection und gib ein beispiel in angular': 'dependency injection= lose kopplung dadurch, dass wir keine benötigten instanzen\n' +
      '  für eine klasse im konstruktor (mit new) erzeugen, stattdessen übergeben wir diese abhängigkeiten\n' +
      '  an die eingabe parameter des konstruktors, dadurch haben wir mehr kontrolle über den code, und\n' +
      '  das testen ist auch viel einfacher. in angular erzeugt das framework die benötigten abhängigkeits instanzen\n' +
      '  wir müssen angular nur mit dem dekorator @injectable sagen, welche Klassen als dependencies verwendet werden sollen\n' +
      '  dann können wir diese markierte klasse im konstruktor einer anderen klasse einimpfen, per private name: Classname\n' +
      '\n' +
      '  beispiel in professorservice.ts:\n' +
      '  @Injectable({\n' +
      '  providedIn: \'root\' // klasse ist nun im root einimpfbar, also überall in der app\n' +
      '})\n' +
      'export class ProfessorService {\n' +
      '\n' +
      '  einimpfen in ProfessorenListeComponent.ts:\n' +
      '  export class ProfessorenListeComponent implements OnInit {\n' +
      'professoren: Professor[]; // Model\n' +
      'constructor(private professorService: ProfessorService) { } // hiert ist die dependency injection',
    'Frage 55: erkläre den unterschied zwischen der ngOnInit Methode und dem Konstruktor einer Komponente': 'Konstruktor: kann beliebig viele parameter haben, wird automatisch aufgelöst per DI\n' +
      '  wenn datentypen @Injectable, ist ausschließlich für DI\n' +
      '  ngOnInit: muss immer ngOnInit(): void sein, also keine methodenparameter und kein rückgabewert.\n' +
      '  und keine DI, wird vom angular framework nach abschluss des konstruktors aufgerufen.\n' +
      '  darf auch anwendungslokig aufrufen.',
    'Frage 56: erkläre was Strukturdirektiven in Templates sind und gib beispiele': 'strukturdirektiven werden benötigt, wenn man typescript code im\n' +
      '  html template ausführen möchte, dazu gehören *ngIf abfragen und schleifen mit *ngFor, oder switch case mit *ngSwitchCase\n' +
      '  string in 22 mit microsyntax, können in JEDEM öffnenden HTML tag eingefügt werden,\n' +
      '  können künstlich geschachtelt werden mit ' + 'dem xml tag div oder span' + '\n' +
      '\n' +
      '  Beispiel *ngIf:\n' +
      '  (xml tag app-professor-details auf)' + '[professor]' + `="selektierterProfessor"` + '\n' +
      '                         *ngIf="selektierterProfessor" (xml tag app-professor-details zu)' + '(closing xml tag app-professor-details)' + ' // bewirkt, dass die komponente professor-details nur eingefügt wird, wenn ein Professor in der Liste selektiert ist\n' +
      '\n' +
      '  Beispiel *ngSwitchCase:\n' +
      '  (xml tag div öffnen)' + ' [ngSwitch]="selektierterProfessor"> // wert, nach dem die Fallunterscheidung erfolgt\n' +
      ' (xml tag p öffnen)' + 'p *ngSwitchCase="null">Kein Professor selektiert' + ' (closing xml tag p) /p> // case =null, diesen HTML code einfügen\n' +
      '(xml tag p öffnen) p *ngSwitchDefault>Selektierter Professor: {{selektierterProfessor.kuerzel}} (closing xml tag p) /p> // kein case trifft zu (case default) diesen HTML code einfügen\n' +
      ' (closing xml tag div)' + '/div>\n' +
      '\n' +
      '  Beispiel *ngFor:\n' +
      '  (xml tag li für liste öffnen)' + 'li *ngFor="let professor of professoren">{{professor.name}} (closing xml tag li für liste) /li> //erzeugt so viele listeneinträge, wie wir Professoren im array haben\n' +
      '\n' +
      '  *ngFor microsyntax:\n' +
      '  *ngFor="let prof of professoren; let i=index; let hervorheben=odd"\n',
    'Frage 57: nenne alle erlaubten keys für *ngFor microsyntax und gebe ein komplexes *ngFor beispiel': 'keys:\n' +
      '  index: durchnummerierung der zeilen ab 0\n' +
      '  first: true, wenn firstes element der zeilen (index o)\n' +
      '  last: true, wenn letzte zeile\n' +
      '  even: true für zeilenindex even/gerade (also 0,2,4 usw)\n' +
      '  odd: true, für zeilenindex odd/ungerade ( also 1,3,5 usw)\n' +
      '  \n' +
      '  komplexes *ngFor Beispiel:\n' +
      '  table>\n' +
      'tr>\n' +
      'th>Nr./th>\n' +
      'th>Vorname/th>\n' +
      'th>Nachname/th>\n' +
      'th>Kürzel/th>\n' +
      '/tr>\n' +
      'tr *ngFor="let professor of professoren; let i = index">\n' +
      'td>{{i+1}}/td>\n' +
      'td>{{professor.vorname}}/td>\n' +
      'td>{{professor.nachname}}/td>\n' +
      'td>{{professor.kuerzel}}/td>\n' +
      '/tr>\n' +
      '/table>',
    'Frage 58: erkläre events und event handler in angular und gib ein beispiel': 'events sind wie in javascript meistens mit einem ergeignis eines buttons verbunden.\n' +
      '  wenn das entsprechende event ausgelöst wird, wird eine komponente aus der komponenten typescript datei aufgerufen.\n' +
      '  syntax im HTML template: (eventname (z.b. click)="funcname(param)"\n' +
      '  erlaubt sind alle javascript events.\n' +
      '\n' +
      '  Beispiel:\n' +
      '  li *ngFor="let professor of professoren" (click)="selektiereProfessor(professor)">',
    'Frage 59: erkläre das Property Binding per Eingabeparameter, zwischen HTML template und component.ts 2 unterschiedlicher komponenten': 'Parameterattribut wird in component.ts mit annotation @Input() versehen (klammern nicht vergessen)\n' +
      '  und wird in HTML template in [] Klammern als html tag attribut aufgerufen.\n' +
      '\n' +
      '  Syntax: aufgerufeneView [attributname]="attributwert">\n' +
      '\n' +
      '  konkretes beispiel: app-professor-details [professor]="selektierterProfessor" >\n' +
      '\n' +
      '  in dazugehöriger component.ts: @Input() professor: Professor;',
    'Frage 60: Erkläre, was ein Router Modul in angular ist und wie man ihn in einer app verwendet': 'mit dem Router Modul kann man routing regeln für die einzelnen Komponenten festlegen und somit die navigation zwischen komponenten steuern\n' +
      '\n' +
      '  um das routing modul in die angular app zu importieren muss man:\n' +
      '\n' +
      '  1. aus Angular-Modul @angular/router importieren\n' +
      'import {RouterModule, Routes} from @angular/router;\n' +
      '\n' +
      '  2. im Modul laden und initialisieren\n' +
      '  imports: [CommonModule, RouterModule.forRoot(routes)]\n' +
      '\n' +
      '  3. auf startseite app.component.html aufrufen (per xml tag):\n' +
      '  h1>{{ title }}/h1>\n' +
      '  router-outlet>/router-outlet>\n',
    'Frage 61: Erkläre routing regeln mit beispiel': 'Routing regeln werden als constantes Object vom typ Routes an RouterModule.forRoot(routes) übergeben, routes entspricht hier dem konstanten object vom typ Routes\n' +
      '\n' +
      'Beispiel:\n' +
      '  import {Route, RouterModule, Routes} from "@angular/router";\n' +
      '  (import ngModule, commonModule, professorenComponents, usw)\n' +
      '\n' +
      '  const routes: Routes = [\n' +
      '  {path: "", redirectTo: "list", pathMatch: "full"},\n' +
      '  {path: "list", component: ProfessorenListeComponent},\n' +
      '  {path: "create", component: ProfessorErstellenComponent},\n' +
      '  {path: "edit/:kuerzel", component: ProfessorAendernComponent}\n' +
      '];\n' +
      '\n' +
      '  @NgModule({\n' +
      '  declarations: [],\n' +
      '  imports: [CommonModule, RouterModule.forRoot(routes)]\n' +
      '})\n' +
      '\n' +
      '  jeder eintrag vom typ Route kann bestehen aus:\n' +
      '  path - pfadangabe relativ zur spezifizierten Basis URL\n' +
      '  component - componente, die sich hinter diesem pfad verbirgt\n' +
      '  redirectTo - aug anderen Pfad umleiten, hier zb "list"\n' +
      '  pathMatch gesamter Pfad (full) oder Prefix (prefix) matchen\n' +
      '\n' +
      '  Regeln werden von oben bis unten abgearbeitet, bis die erste Regel matcht\n' +
      '  letzte Regel häufig:\n' +
      '  { path: "**", component: PageNotFoundComponent }',
    'Frage 62: implementiere die CRUD methoden für den Professorservice': '  \n' +
      'export class ProfessorService {\n' +
      '  \n' +
      '  profs: Professor[] = [\n' +
      '{vorname: "Thomas", nachname: "Specht", kuerzel: "SPE"},\n' +
      '{vorname: "Michael", nachname: "Groeschel", kuerzel: "GRM"}\n' +
      '];\n' +
      '\n' +
      '  getProfessoren(): Professor[] {\n' +
      'return this.profs;\n' +
      '}\n' +
      '  \n' +
      'getProfessor(kuerzel: string): Professor | undefined {\n' +
      'for (const prof of this.profs) {\n' +
      '  if (prof.kuerzel === kuerzel) {\n' +
      'return prof;\n' +
      '}\n' +
      '}\n' +
      'return undefined;\n' +
      '}\n' +
      '  \n' +
      '  create(professor: Professor): Professor {\n' +
      'this.profs.push(professor);\n' +
      'return professor;\n' +
      '}\n' +
      '  \n' +
      'update(professor: Professor): Professor {\n' +
      'for (const prof of this.profs) {\n' +
      '  if (prof.kuerzel === professor.kuerzel) {\n' +
      'prof.vorname = professor.vorname;\n' +
      'prof.nachname = professor.nachname;\n' +
      'prof.kuerzel = professor.kuerzel;\n' +
      '}\n' +
      '}\n' +
      'return professor;\n' +
      '}\n' +
      '  \n' +
      'delete(professorToDelete: Professor): void {\n' +
      'this.profs = this.profs.filter(\n' +
      '(element: Professor) => element.kuerzel !== professorToDelete.kuerzel);\n' +
      '}\n' +
      '  \n' +
      '}',
    'Frage 63: erkläre die Zweiwegebindung und gebe ein beispiel': 'Zweiwegebindung= wird benutzt bei input fields, synchronisiert attribute der ModelView (component.ts) automatisch mit dem im HTML template eingegebenen Wert\n' +
      '  syntax: [(ngModel)]\n' +
      '  \n' +
      '  komplettes beispiel:\n' +
      '  input [(ngModel)]="professor.vorname"/>  //der eingegebene wert setz also den vornamen vom attribut professor in der Komponent.ts',
    'Frage 64: Fasse alle 4 mögliche bindungsarten im Template zusammen und gebe jeweils ein Beispiel.': '{{}} = interpolation, bindung zwischen ViewModel->View, readonly,\n' +
      '  bsp:\n' +
      '  h1>{{"professor.nachname"}}/h1>\n' +
      '  \n' +
      '  () = event handler, benutzt javascript event, um im HTML template eine methode aus der ViewModel aufzurufen also View->ViewModel\n' +
      '  bsp:\n' +
      '  button (click) = "macheEs()">\n' +
      '  \n' +
      '  [()] = zweiwege bindung, bindet input field aus dem html template an attribut aus der ViewModel, so dass es bei eingabe automatisch synchronisiert wird\n' +
      '  \n' +
      '  [] = parameterattribut, kann benutzt werden, um aus der View aus, ein attribut einer anderen Komponente aufzurufen.\n' +
      '  bsp:\n' +
      '  app-professor-details [professor]="selectierterProfessor">',
    'Frage 65: Erkläre, mit Beispielen , wie man vom ViewModel (component.ts) aus  und wie man von der View aus (html template) mit dem Router auf eine andere Komponente navigieren kann': '1. von ViewModel aus:\n' +
      '  Beispiel aus ProfessorErstellenComponent:\n' +
      '\n' +
      '  export class ProfessorErstellenComponent implements OnInit {\n' +
      '  professor: Professor;\n' +
      '\n' +
      '  constructor(private router: Router, private professorService: // router per DI einimpfen\n' +
      '  ProfessorService) { }\n' +
      '\n' +
      'ngOnInit() {\n' +
      'this.professor = new Professor();\n' +
      '}\n' +
      '\n' +
      '\n' +
      '  save(professor: Professor): void {\n' +
      '  this.professorService.create(professor);\n' +
      '  this.router.navigateByUrl("list");  // this.router kommt über die DI\n' +
      '}\n' +
      '}\n' +
      '\n' +
      '  2. von View aus:\n' +
      '  button routerLink="/create">Erstellen/button> // einfach über das attribut routerLink\n' +
      '\n' +
      '  damit das funktioniert, muss man allerding im Modul, Router Module importieren:\n' +
      '  Beispiel ProfessorenVerwaltungModule\n' +
      '\n' +
      '  import {RouterModule} from "@angular/router";\n' +
      '  \n' +
      '  @NgModule({\n' +
      '  declarations: [ProfessorenListeComponent, ProfessorDetailsComponent,\n' +
      '  ProfessorErstellenComponent, ProfessorAendernComponent],\n' +
      '  imports: [CommonModule, FormsModule, RouterModule],\n' +
      '  exports: [ProfessorenListeComponent]\n' +
      '})',
    'Frage 66: nenne, welche URL Parameter es gibt und wie man diese ausliest': 'Attribut Typ Inhalt\n' +
      'url string[] URL-Pfadelemente (ohne Protokoll- , Host- und Portanteil)\n' +
      'params object Assoziatives Array mit URL-Parametern, z.B. kuerzel\n' +
      'queryParams object Assoziatives Array von Query-Parametern (?-Parameter)\n' +
      'fragment string URL-Bestandteil hinter #\n' +
      'routeConfig Route Routerregel, die zu diesem Aufruf geführt hat\n' +
      '\n' +
      '  URL Parameter auslesen:\n' +
      '  zusätzlicher parameter per DI anfordern:\n' +
      '  route: ActivatedRoute\n' +
      'snapshot der route auslesen:\n' +
      '  const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;\n' +
      'Assoziatives Array der URL-Parameter auslesen:\n' +
      '  const kuerzel: string | null = routeSnapshot.params["kuerzel"];\n' +
      '\n' +
      '  Konkretes Beispiel in ProfessorAendernComponent:\n' +
      '  ngOnInit() {\n' +
      '  const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;\n' +
      '  const kuerzel: string | null = routeSnapshot.params["kuerzel"];\n' +
      '  if (kuerzel) {\n' +
      'this.professor = this.professorService.getProfessor(kuerzel);\n' +
      '} else {\n' +
      'this.router.navigateByUrl("/list");\n' +
      '}\n' +
      '}\n' +
      '\n' +
      '\n' +
      '  in html template:\n' +
      '  button routerLink="/edit/{{professor.kuerzel}}">Ändern/button> // somit kann man über interpolationsbindung auf den Korrekten Professor navigieren\n' +
      '\n',
    'Frage67: Erkläre was zu tun ist, wenn man Routing Regeln mit kindern verwenden möchte': 'Die Grundidee lautet pro modul einen basispfad zu haben\n' +
      '  bsp: professor für Modul Professorenverwaltung\n' +
      '\n' +
      '  Navigationspfade der Kinder relativ zu BasisPfad\n' +
      '  bsp: create steht für absoluten pfad professor/create\n' +
      '\n' +
      '  navigation innerhalb des Moduls und zwischen den Modulen nun RELATIV statt ABSOLUT\n' +
      '  also statt /create (vorher) nun ../create (nachher)\n' +
      '\n' +
      '  Beispiel:\n' +
      '\n' +
      '  const routes: Routes = [\n' +
      '  {\n' +
      '  path: "professor",  // alle pfade der Professorenverwaltung beginnen nun mit /professor/\n' +
      '  component: ProfessorenverwaltungComponent,\n' +
      '  children: [\n' +
      '{path: "", redirectTo: "list", pathMatch: "full"},\n' +
      '{path: "list", component: ProfessorenListeComponent},\n' +
      '{path: "create", component: ProfessorErstellenComponent},\n' +
      '{path: "edit/:kuerzel", component: ProfessorAendernComponent}\n' +
      ']\n' +
      '}\n' +
      '];\n' +
      '\n' +
      '  @NgModule({\n' +
      '  imports: [RouterModule.forChild(routes)] // neu: nun RouterModule.forChild(routes)\n' +
      '\n' +
      '})\n' +
      '\n' +
      '  Anpassungen: (Absoluter Pfad zu relativ)\n' +
      '  in professoren-liste-component.html:\n' +
      '  button routerLink="../create">Erstellen/button>  // ../creaze statt vorher /create\n' +
      '\n' +
      'in professor-aendern-component.ts:\n' +
      '  this.router.navigate(["../../"], {relativeTo: this.route}); // statt vorher this.router.navigateByUrl(\'list\'); oder anders ausgedrückt: einfach 2 ordner zurück, statt konkret auf "/list"\n',
    'Frage 68: Erkläre was Router Guards sind und gib beispiele': 'Guard = eigene Typescript klasse, klassenname endet mit Guard\n' +
      '  implementiert je nach bedarf das interface CanActivate, CanActivateChild, oder beide\n' +
      '  wird im Router an Routerpfade gebunden, bewacht also den Aufruf der Routerpfade\n' +
      '  entscheidet für jeden Routerpfad Aufruf, ob dieser erlaubt, blockiert oder umgeleitet wird\n' +
      '\n' +
      '  interface canActivate(route: ActivatedRouteSnapshot, stat: RouterStateSnapshot): boolean\n' +
      '  route= router regel, die zu diesem router aufruf geführt hat, route.url = pfadanteil, der zum aufruf geführt hat\n' +
      '  bsp: /professor\n' +
      '\n' +
      '  state= aktualler router zustand, state.url = tatsächlich aufgerufener Pfad\n' +
      '  bsp: /professor/list\n' +
      '\n' +
      '  rückgabewert boolean = true heißt navigation erlauben/durchlassen\n' +
      '  = false heißt navigation verbieten/abbrechen\n' +
      '\n' +
      ' canActivateChild: aufgerufen, sobald ein children Pfad diese routerregel auslöst, auch wenn nur innerhalb der children dieser regel navigiert wird\n' +
      '  rest analog zu canActivate\n' +
      '\n' +
      '  anwendungsbeispiel im router (canActivate & canActivateChild):\n' +
      '\n' +
      '  const routes: Routes = [\n' +
      '  {\n' +
      '  path: "professor",\n' +
      '  component: ProfessorenverwaltungComponent,\n' +
      '  canActivate: [AuthentifizierungGuard],\n' +
      '  canActivateChild: [AuthentifizierungGuard],\n' +
      '  children: [\n' +
      '{path: "", redirectTo: "list", pathMatch: "full"},\n' +
      '{path: "list", component: ProfessorenListeComponent},\n' +
      '{path: "create", component: ProfessorErstellenComponent},\n' +
      '{path: "edit/:kuerzel", component: ProfessorAendernComponent}\n' +
      ']\n' +
      '}\n' +
      '];\n' +
      '\n' +
      '  dazugehörige AuthentifizierungGuard.ts:\n' +
      '\n' +
      '  @Injectable({\n' +
      '  providedIn: \'root\'\n' +
      '})\n' +
      'export class AuthentifizierungGuard implements CanActivate, CanActivateChild {\n' +
      '  constructor(private loginService: LoginService, private router: Router) { }\n' +
      'checkLogin(url: string): boolean {\n' +
      'if (this.loginService.isLoggedIn) {\n' +
      '  return true;\n' +
      '} else {\n' +
      '  this.loginService.redirectUrl = url; // Aufruf-URL merken, um später dorthin zurückzunavigieren\n' +
      '  this.router.navigateByUrl("/login"); // Auf LoginComponent umleiten\n' +
      '  return false;\n' +
      '}\n' +
      '}\n' +
      'canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {\n' +
      'const url: string = state.url;\n' +
      'return this.checkLogin(url);\n' +
      '}\n' +
      'canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {\n' +
      'const url: string = state.url;\n' +
      'return this.checkLogin(url);\n' +
      '}\n' +
      '}',
    'Frage69: erkläre was ein Guard ist, der canDeactivate implementiert, und gib beispiele': 'canDeactive in einem Guard überwacht das VERLASSEN des routerpfads\n' +
      '  im gegenteil zu canActivate / canActivateChild, die das BETRETEN überwachen\n' +
      '  sinnvoller verwendungszweck: Abfrage trotz nicht gespeicherter Änderungen page verlassen?\n' +
      '  hierzu erstellt man ein zunächst ein interface.\n' +
      '\n' +
      '  beispiel AenderungenSpeichernInterface.ts:\n' +
      '\n' +
      '  export interface AenderungenSpeichernInterface {\n' +
      '  hatUngespeicherteAenderungen(): boolean;\n' +
      '}\n' +
      '\n' +
      '  dann erstellt man die Guard.ts.\n' +
      '\n' +
      '  Beispiel AenderungenSpeichernGuard.ts:\n' +
      '\n' +
      '  @Injectable({\n' +
      '  providedIn: "root"\n' +
      '})\n' +
      'export class AenderungenSpeichernGuard implements\n' +
      'CanDeactivate AenderungenSpeichernInterface> {\n' +
      '  canDeactivate(component: AenderungenSpeichernInterface,\n' +
      '  currentRoute: ActivatedRouteSnapshot,\n' +
      '  currentState: RouterStateSnapshot,\n' +
      '  nextState?: RouterStateSnapshot): boolean {\n' +
      'if (component.hatUngespeicherteAenderungen()) {\n' +
      '  return confirm("Trotz ungespeicherter Änderungen verlassen?");\n' +
      '} else {\n' +
      '  return true; // Verlassen des Dialogs OK\n' +
      '}\n' +
      '}\n' +
      '}\n' +
      '\n' +
      '  dann muss man canDeactivate noch ins routing module importieren\n' +
      '\n' +
      '  Beispiel ProfessorenverwaltungRoutingModule:\n' +
      '\n' +
      '  const routes: Routes = [\n' +
      '  {\n' +
      '  path: "professor",\n' +
      '  component: ProfessorenverwaltungComponent,\n' +
      '  canActivate: [AuthentifizierungGuard],\n' +
      '  canActivateChild: [AuthentifizierungGuard],\n' +
      '  children: [\n' +
      '{path: "", redirectTo: "list", pathMatch: "full"},\n' +
      '{path: "list", component: ProfessorenListeComponent},\n' +
      '{path: "create", component: ProfessorErstellenComponent,\n' +
      'canDeactivate: [AenderungenSpeichernGuard]},\n' +
      '{path: "edit/:kuerzel", component: ProfessorAendernComponent,\n' +
      'canDeactivate: [AenderungenSpeichernGuard]}\n' +
      ']\n' +
      '}\n' +
      '];\n' +
      '\n' +
      '  und man muss die funktionen equalsProfessor und cloneProfessor implementieren in professor.ts,\n' +
      '  (darauf zu achten ist, dass sich die methoden außerhalb der domain class export class Professor{} befinden müssen,\n' +
      '  weil wir sonst Professor nicht mehr als JSON object verwenden können):\n' +
      '\n' +
      '  export class Professor {\n' +
      '  vorname: string;\n' +
      '  nachname: string;\n' +
      '  kuerzel?: string;\n' +
      '}\n' +
      'export function equalsProfessor(prof1: Professor, prof2: Professor ):\n' +
      'boolean {\n' +
      '  return prof1.vorname === prof2.vorname &&\n' +
      '  prof1.nachname === prof2.nachname &&\n' +
      '  prof1.kuerzel === prof2.kuerzel;\n' +
      '}\n' +
      'export function cloneProfessor(prof: Professor): Professor {\n' +
      '  const result = new Professor();\n' +
      '  result.vorname = prof.vorname;\n' +
      '  result.nachname = prof.nachname;\n' +
      '  result.kuerzel = prof.kuerzel;\n' +
      '  return result;\n' +
      '}\n' +
      '\n' +
      '  zum schluss muss man noch das Interface AenderungenSpeichernInterface.ts in allen Componenten implementieren,\n' +
      '  in denen der Guard benutzt wird (hier also professor aendern component und professor speichern kcomponent):\n' +
      '\n' +
      '  professor aendern component.ts:\n' +
      '\n' +
      '  })\n' +
      'export class ProfessorAendernComponent implements OnInit,\n' +
      'AenderungenSpeichernInterface { // neu\n' +
      '  professor: Professor | undefined;\n' +
      '  oriProfessor: Professor | undefined;\n' +
      '  aenderungenGespeichert: boolean = false; // neu\n' +
      '\n' +
      'ngOnInit() {\n' +
      'const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;\n' +
      'const kuerzel: string | null = routeSnapshot.params["kuerzel"];\n' +
      'this.oriProfessor = kuerzel ? this.professorService.getProfessor(kuerzel) : undefined;\n' +
      'if (this.oriProfessor) {        // neu von hier\n' +
      '  this.professor = cloneProfessor(this.oriProfessor); // Um Änderungen\n' +
      '  feststellen zu können\n' +
      '} else {\n' +
      '  this.router.navigateByUrl("/list"); //neu bis hier\n' +
      '}\n' +
      '}\n' +
      '\n' +
      '  update(professor: Professor): void {\n' +
      'this.professorService.update(professor);\n' +
      'this.aenderungenGespeichert = true; // neu\n' +
      'this.router.navigate(["../../"], {relativeTo: this.route});\n' +
      '}\n' +
      '\n' +
      '  hatUngespeicherteAenderungen(): boolean { // komplett neu, implementiert das interface\n' +
      'if (this.professor && this.oriProfessor) {\n' +
      '  return !this.aenderungenGespeichert &&\n' +
      '  !equalsProfessor(this.professor, this.oriProfessor);\n' +
      '} else {\n' +
      '  return false;\n' +
      '}\n' +
      '}\n' +
      '}\n' +
      '\n' +
      '\n' +
      '  professor speichern component.ts:\n' +
      '\n' +
      '  export class ProfessorErstellenComponent implements OnInit,\n' +
      'AenderungenSpeichernInterface {  // neu\n' +
      '  professor: Professor;\n' +
      '  aenderungenGespeichert: boolean = false; // neu\n' +
      '\n' +
      '  save(professor: Professor): void {\n' +
      'this.professorService.create(this.professor);\n' +
      'this.aenderungenGespeichert = true; // neu\n' +
      'this.router.navigate(["../"], {relativeTo: this.route});\n' +
      '}\n' +
      'hatUngespeicherteAenderungen(): boolean { // komplett neu, implementiert das interface\n' +
      'return !this.aenderungenGespeichert;\n' +
      '}\n' +
      '}',
    'Frage 70: was ist ein Service allgemein?': 'Ein Service ist in sich abgeschlossen und eigenständig nutzbar\n' +
      '  ist einfach wiederverwendbar, ohne änderung im quellcode\n' +
      '  ist nicht configurierbar, außer abhängigkeiten zu anderen Services\n' +
      '  allein durch schnittstellen nach außen spezifiziert\n' +
      '  erbringt dienste für andere services über seine exportierten schnittstellen\n' +
      '  nutzt dienste anderer services über importierte schnittstellen\n' +
      '  ersetzbar durch scnittstelle, die gleiche schnittstellen exportiert\n' +
      '  (wie zb bei uns wenn wir die CRUD hardcoden und zu REST wechseln wollen,\n' +
      '  müssen wir nur den service umschreiben / einen anderen Service benutzen der sinngemäß das gleiche tut.\n' +
      'verbirgt innenleben vor außenwelt (information hiding)',
    'Frage 71: Wofür steht REST als Architekturstil?': 'REST: Representation State Transfer\n' +
      '  client server basierter architekturstil\n' +
      '\n' +
      '  Server:\n' +
      '  zustandslos, bietet client repräsentation von ressourcen an\n' +
      '  meist datein in Datenbank gespeicherte domänenobjekte\n' +
      '  addressierung über eindeutige URI (Uniform Resource Identifier)\n' +
      '  Client darf sich Repräsentation (format) wünschen\n' +
      '  übermittlung im HTTP header oder in URI\n' +
      '  Server liefert dem Client die geqünschte Repräsentation der Ressource\n' +
      '\n' +
      '\n' +
      '  Client:\n' +
      '  addressiert Ressource per URI & wählt repräsentation aus\n' +
      '  zustand (state) der Anwendung\n' +
      '  festgelegt durch abgerufene Repräsentation einer Ressource ("seite")\n' +
      '\n' +
      '  REST /HTTP verben /methoden:\n' +
      '  CREATE = POST\n' +
      '  READ = GET\n' +
      '  UPDATE = PUT\n' +
      '  DELETE = DELETE',
    'Frage 72: wofür stehen URL und URI und was ist der Unterschied?': 'URL= Uniform Resource Locator= realer Speicherort, zb dateiname im webserver\n' +
      '\n' +
      '  URI= Uniform Resource Identifier= symbolischer resourcenidentifikator (imaginärer pfad der app)\n' +
      '  meist kein bezug mehr zu speicherort oder dateiname, moderne webframeworks verwenden generell URI zb grails\n' +
      '\n' +
      '  beispiel einer URI in unserer anwendung:\n' +
      '  http://localhost:4200/professor/1\n' +
      '\n' +
      '  (http = protokoll)\n' +
      '  (localhost:4200 = webserver)\n' +
      '  (professor = ressource)\n' +
      '  (1 = ressourcen-ID)',
    'Frage 73: was sind Relationale Datenbaken, was sind ihre nachteile und was sind die unterschiede zu NoSql und deren vor und nachteile?': 'Relationale DB:\n' +
      '  datenspeicherung in Tabellen\n' +
      '  Primärschlüssel als eindeutige ID jedes Datensatzes\n' +
      '  Beziehungen über Fremdschlüssel\n' +
      '  Joins für tabellenübergreifende abfragen\n' +
      '\n' +
      '  festes schema (jeder eintrag in einer tabelle hat die gleichen und gleich viele attribute\n' +
      '  strikte transaktionssicherheit\n' +
      '\n' +
      '  acid:\n' +
      '  atomicity: transaktion ganz (commit) oder gar nicht (rollback) ausgeführt\n' +
      '  concistency: transaktion hinterlässt datenbank in konsistentem Zustand\n' +
      '  isolation: transaktionen beeinflussen sich gegenseitig nicht\n' +
      '  durability: daten nach erfolgreicher transaktion dauerhaft in DB\n' +
      '\n' +
      '  Sprache: Structured Query Language (SQL)\n' +
      '  Nachteile:\n' +
      '  schlecht skalierbar\n' +
      '  schlecht verteilbar\n' +
      '  unflexibel bei änderungen an datenbankschema\n' +
      '  ungeeignet für sehr große datenmengen (big data)\n' +
      '  streaming anwendungen (audio, video)\n' +
      '\n' +
      '  NoSQL DB:\n' +
      '  = Not Only SQL\n' +
      '  keine datenspeicherung in tabellen\n' +
      '  keine joins\n' +
      '  schemafrei\n' +
      '  attribute für jeden datensatz frei wählbar\n' +
      'aufgeweichte Transaktionssicherheit\n' +
      ' Basically Available: Kurze Phasen der Nichtverfügbarkeit möglich\n' +
      ' Soft State: Nicht alle Kopien jederzeit schreibkonsistent*\n' +
      ' Eventually consistent: Nach gewisser Wartezeit Konsistenz wieder hergestellt*\n' +
      '* Bei redundanter verteilter Datenhaltung einzelne Server verzögert aktualisiert\n' +
      '\n' +
      '  SQL nur optional verfügbar\n' +
      '\n' +
      '  Vorteile:\n' +
      '  höhere performance bei:\n' +
      '  großen datenmengen (big data)\n' +
      '  komplexen suchabfragen\n' +
      '  verteilung der daten auf mehreren servern (gute horizontale skalierung)\n' +
      '  webbasierten anwendungen bei vielen parallelen zugriffen\n' +
      '  streaming anwendungen\n' +
      '\n' +
      '  datenbankschema flexibel\n' +
      '\n' +
      '  Nachteile:\n' +
      '  aufgeweichte Transaktionssicherheit\n' +
      '  fehlende standartisierung\n' +
      '  keine einheitliche abfragesprache (braucht SQL adapter)\n' +
      '\n' +
      '  Beispiel MongoDB (dokumentbasiert):\n' +
      '  schemafrei\n' +
      '  verteilungsfähig\n' +
      '  BASE statt ACID, also aufgeweichte Transaktionssicherheit\n' +
      'Eventual Consistency\n' +
      ' Konsistenz und Verfügbarkeit höher priorisiert als Partitionstoleranz\n' +
      '\n' +
      '  MongoDB besteht aus Dokumenten (in SQL=zeile/instanz einer tabelle) und Collections (statt in SQL tabelle)\n' +
      '\n' +
      '  Dokumente im JSON format, daher gut geeignet für javascriipt, typescript, nodejs, angular und RESTfulwebservices\n' +
      '  1 Datensatz = 1 Dokument, jedes dokument hat automatisch generierte ID\n' +
      '\n' +
      '  collection = tabelle\n' +
      '  Datenbank besteht aus vielen collections\n' +
      '\n' +
      '  Relationale DB MongoDB Bemerkungen zu MongoDB\n' +
      'Datenbank Datenbank Datenbank\n' +
      'Tabelle DB-Tabelle Collection\n' +
      'Datensatz Zeile Dokument\n' +
      'ID Primärschlüssel Dokument-ID\n' +
      'Attribut Spalte JSON-Key Key-Value-Paare\n' +
      'Attributwert Spaltenwert JSON-Value (assoziatives Array)\n' +
      'Attributtyp Spaltentyp -',
    'Frage 74: erkläre das CAP theorem': 'in verteilten Systemen können nicht alle 3 gleichzeitig garantiert werden:\n' +
      '  CAP=\n' +
      '  Consistency: Konsistenz replizierter Daten über mehrere DB-Server hinweg\n' +
      '  Availability: Verfügbarkeit im Sinne akzeptabler Antwortzeiten\n' +
      '  Partition tolerance: Ausfalltoleranz, wenn DB-Server / Netzwerke ausfallen\n' +
      '\n' +
      '• Gründe\n' +
      ' Konsistenzherstellung bei Replikation kostet Zeit\n' +
      '• Antwortzeiten steigen, oder wir müssen auf Ausfallsicherheit verzichten\n' +
      ' Kurze Antwortzeiten erfordern\n' +
      '• Verzicht auf Replikation oder Inkaufnahme inkonsistenter Zwischenzustände\n' +
      ' Replikation (Partitionstoleranz) hat zur Folge\n' +
      '• lange Antwortzeiten oder inkonsistente Zwischenzustände',
    'Frage 75: erkläre Same Origin Policy als sicherheitskonzept und den zusammenhang mit CORS (Cross Origin Resource Sharing)': '\n' +
      'Same Origin Policy besagt, dass:\n' +
      'Browseranwendungen dürfen vie Javascript nur auf den Webserver zugreifen, von dem sie geladen wurden.\n' +
      'es müssen übereinstimmen:\n' +
      'protokoll (zb HTTP (s))\n' +
      'hostname (rechnername)\n' +
      'port (zb 4200)\n' +
      '\n' +
      'Grund: wenn das nicht der Fall wäre hätten wir ein sicherhheitsrisiko, dadurch könnten andere Webseiten Inhalte unseres Web Servers missbrauchen\n' +
      '\n' +
      'Beispiel für einen Betrugsversuch:\n' +
      'Bank betreibt webserver WBank, mit HTML seiten für banküberweisungen, mit RESTful webservice für Home banking\n' +
      'Betrüger betreibt web server WBetrüger, dieser:\n' +
      'lädt webseiten von WBank nach, sehen also so aus wie originalseiten, Benutzer gibt nun gutgläubig seinen PIN und TAN ein\n' +
      'Betrüger ersetzt zielkontonummer nun durch seine eigene und führt überweisung aus.\n' +
      'oder: Betrüger lockt Kunde per email auf seinen webserver WBetrüger und Kunde merkt garnicht, dass er auf webserver des Betrügers ist.\n' +
      '\n' +
      'hier kommt Same Origin Policy ins spiel: browser weist alle Zugriffe auf WBank von WBetrüger ab,\n' +
      'da anderer Hostname und Port\n' +
      '\n' +
      'Wenn man bei seiner eigenen Andwendung allerdings die Same Origin Policy abschalten will, etwa um zwischen dem eigenen REST client und server zu kommunizieren, \n' +
      'die auf unterschiedlichen Ports laufen, benötigt man CORS (Cross Origin Ressource Sharing)\n' +
      'CORS ermöglicht also Webservern, webserverübergreifende Zugrife freizuschalten\n' +
      'entweder für bestimmte vertrauenswürdige webserver\n' +
      'oder global\n' +
      '\n' +
      'CORS beispiel in Node.js:\n' +
      '1. CORS importieren:\n' +
      'import * as cors from "cors";\n' +
      '\n' +
      '2. CORS für express.js app global freischalten:\n' +
      'const app: Application = express();\n' +
      'app.use(cors());\n' +
      '\n' +
      '3. CORS für bestimmten webserver freischalten:\n' +
      'const app: Application = express();\n' +
      'app.use(cors({origin: "http://localhost:4200"})); // nur für localhost:4200, also angular\n' +
      '\n' +
      '4. CORS für mehrere webserver freischalten:\n' +
      'const app: Application = express();\n' +
      'app.use(cors({origin: ["http:localhost:4200", "http://localhost:4201"]}));',
    'Frage 76: gib ein Beispiel für die main.ts des Nodejs servers': 'import * as express from "express";\n' +
      'import * as cors from "cors";\n' +
      'import router from "./professor-restservice"; // Import globaleVariable router\n' +
      'import {Server} from "http";\n' +
      'import {AddressInfo} from "net";\n' +
      'import {Application, json} from "express";\n' +
      'const app: Application = express(); // Express App\n' +
      'app.use(json()); // JSON aktivieren\n' +
      'app.use(cors()); // Cross Origin Resource Sharing global erlauben\n' +
      'app.use("/professor", router); // Router für REST Service "Professor" einbinden\n' +
      'const RESTFUL_WEBSERVICE_PORT = 8080;\n' +
      '// RESTful Web Service App initialisieren\n' +
      'const server: Server = app.listen(RESTFUL_WEBSERVICE_PORT,\n' +
      '() => {\n' +
      'const addressinfo: AddressInfo | string = server.address();\n' +
      'if (addressinfo["port"]) { // Objekt vom Typ Addressinfo\n' +
      'console.log("RESTful Web Service läuft auf Port", addressinfo["port"]);\n' +
      '} else { // Objekt vom Typ String\n' +
      'console.log("RESTful Web Service läuft auf", addressinfo);\n' +
      '}\n' +
      '});\n',
    'Frage 77: implementiere die gesamte professor-restservice.ts (den nodejs server) datei mit allen HTTP methoden (GET, GET "/:id", POST, PUT "/:id", DELETE "/:ID")': '(seite1)\n' +
      'import * as express from "express";\n' +
      'import {\n' +
      'Db, Collection, MongoCallback, MongoClient,\n' +
      'InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject\n' +
      '} from "mongodb";\n' +
      '// Router deklarieren und exportieren\n' +
      'const router: express.Router = express.Router(); // Router ist KEIN Objekt\n' +
      'export default router; // Vor let und const kann kein export default stehen\n' +
      'const DB_URL = "mongodb://localhost:27017/hochschuldb";\n' +
      'const PROFESSOR_COLLECTION_NAME = "professor"; // Name der DB-Collection\n' +
      'const PATH_PROFESSOR = ""; // Pfad für GET, POST\n' +
      'const PATH_PROFESSOR_ID = "/:id"; // Pfad für GET :id, PUT, DELETE\n' +
      'let db: Db; // Als globale Variable zwecks Wiederverwendung\n' +
      'let dbProfessorCollection: Collection; // Zugang zur DB-Collection "professor"\n' +
      '(seite2)\n' +
      '// Direkt beim Skriptstart die Datenbankverbindung öffnen und dauerhaft offen halten\n' +
      'MongoClient.connect(DB_URL, {useNewUrlParser: true})\n' +
      '.then((client: MongoClient) => {\n' +
      'db = client.db(); // DB-Verbindung speichern zwecks Wiederverwendung\n' +
      'dbProfessorCollection = db.collection(PROFESSOR_COLLECTION_NAME);\n' +
      '// Zugang zur Professor Collection\n' +
      'console.log("Erfolgreich mit MongoDB verbunden");\n' +
      '})\n' +
      '.catch((err: Error) => {\n' +
      'console.log("Konnte Datenbank nicht verbinden: " + err.message);\n' +
      '})\n' +
      '// Allgemeiner Fehlerhandler für alle REST-Aufrufe\n' +
      'function handleError(response: express.Response, reason: string,\n' +
      'message: string, code?: number): void {\n' +
      'console.log("ERROR: " + reason);\n' +
      'response.status(code || 500).json({"error": message});\n' +
      '}\n' +
      '(seite3)\n' +
      '/* Implementierung der REST-Methoden\n' +
      '* GET: Alle Professoren\n' +
      '* GET "/:id" Professor mit bestimmtem Kürzel\n' +
      '* POST: Neuen Professor erstellen\n' +
      '* PUT "/:id" Professor ändern\n' +
      '* DELETE "/:ID" Professor löschen\n' +
      '*/\n' +
      'router.get(PATH_PROFESSOR,\n' +
      '(request: express.Request, response: express.Response) => {\n' +
      'dbProfessorCollection.find({}).toArray()\n' +
      '.then((resultArray: any[]) => {\n' +
      'response.status(200).json(resultArray);\n' +
      '})\n' +
      '.catch((err: Error) => {\n' +
      'handleError(response, err.message, "Datenbankfehler: Konnte Professoren nicht lesen");\n' +
      '});\n' +
      '});\n' +
      '(seite4)\n' +
      'router.get(PATH_PROFESSOR_ID,\n' +
      '(request: express.Request, response: express.Response) => {\n' +
      'dbProfessorCollection.findOne({kuerzel: request.params.id})\n' +
      '.then((result: MongoCallback string>) => {\n' +
      'if (result) {\n' +
      'response.status(200).json(result);\n' +
      '} else {\n' +
      'response.status(404).json({"error": "Not found: ${request.url}"});\n' +
      '}\n' +
      '})\n' +
      '.catch((err: Error) => {\n' +
      'handleError(response, err.message,\n' +
      '"Datenbankfehler: Konnte Professor ${request.params.id} nicht lesen");\n' +
      '});\n' +
      '});\n' +
      '(seite5)\n' +
      'router.post(PATH_PROFESSOR,\n' +
      '(request: express.Request, response: express.Response) => {\n' +
      'const newProfessor = request.body;\n' +
      'newProfessor.createDate = new Date(); // Systemzeit\n' +
      'dbProfessorCollection.insertOne(newProfessor)\n' +
      '.then((result: InsertOneWriteOpResult) => {\n' +
      'response.status(201).json(result.ops[0]);\n' +
      '})\n' +
      '.catch((err: Error) => {\n' +
      'handleError(response, err.message,\n' +
      '"Datenbankfehler: Konnte Professor ${request.params.id} nicht erstellen");\n' +
      '});\n' +
      '});\n' +
      '(seite6)\n' +
      'router.put(PATH_PROFESSOR_ID,\n' +
      '(request: express.Request, response: express.Response) => {\n' +
      'const updateJSONDoc = request.body;\n' +
      'delete updateJSONDoc._id; // Weil immutable, darf nicht im updateOne stehen\n' +
      'dbProfessorCollection.updateOne({kuerzel: request.params.id}, {$set: updateJSONDoc})\n' +
      '.then((result: UpdateWriteOpResult) => {\n' +
      'updateJSONDoc._id = request.params.id;\n' +
      'response.status(200).json(updateJSONDoc);\n' +
      '})\n' +
      '.catch((err: Error) => {\n' +
      'handleError(response, err.message,\n' +
      '"Datenbankfehler: Konnte Professor ${request.params.id} nicht ändern");\n' +
      '});\n' +
      '});\n' +
      '(seite7)\n' +
      'router.delete(PATH_PROFESSOR_ID,\n' +
      '(request: express.Request, response: express.Response) => {\n' +
      'dbProfessorCollection.deleteOne({kuerzel: request.params.id})\n' +
      '.then((result: DeleteWriteOpResultObject) => {\n' +
      'response.status(200).json(request.params.id);\n' +
      '})\n' +
      '.catch((err: Error) => {\n' +
      'handleError(response, err.message,\n' +
      '"Datenbankfehler: Konnte Professor ${request.params.id} nicht löschen");\n' +
      '});\n' +
      '});\n',
    'Frage 78: erkläre die REST methode router.get(); (also getall, ohne id) an dem beispiel aus der professor-restservice.ts vom nodejs server': 'router.get(PATH_PROFESSOR,\n' +
      '(request: express.Request, response: express.Response) => {\n' +
      'dbProfessorCollection.find({}).toArray()\n' +
      '.then((resultArray: any[]) => {\n' +
      'response.status(200).json(resultArray);\n' +
      '})\n' +
      '.catch((err: Error) => {\n' +
      'handleError(response, err.message, "Datenbankfehler: Konnte Professoren nicht lesen");\n' +
      '});\n' +
      '});\n' +
      '\n' +
      'Erklärung:\n' +
      'router.get erzeugt router eintrag: URI: "(relativ zu Router-Basis http://localhost:8080/professor)\n' +
      'methode: GET, bei aufruf dieser URI, die closure aufrufen mit den parametern\n' +
      'request: http request, zb für zugang zu GET parametern\n' +
      'response: http response an client\n' +
      '\n' +
      'innerhalb der closure:\n' +
      '\n' +
      'dbProfessorCollection.find({}).toArray()\n' +
      'ruft alle Datensätze der DB Collection professor ab\n' +
      'inm {} steht das Suchkriterium (in dem Fall keins)\n' +
      'liefert Ergebnis als Cursor any>\n' +
      'wird zur Weiterverarbeitung in Array konvertiert\n' +
      '\n' +
      '.then((resultArray: any[]) =>{\n' +
      ' response.status(200).json(resultArray);\n' +
      '})\n' +
      '\n' +
      '.then macht den aufruf der closure asynchron (nicht blockierend), dient als promise (sobald ich meine antwort habe, gebe ich sie automatisch an den client weiter)7\n' +
      '.catch closure wird ausgeführt, im falle eines DB zugriff fehlers\n' +
      '\n' +
      'status(200) bedeutet ok\n' +
      'json(resultArray) wandelt das result array in ein JSON dokument um',
    'Frage 79: erkläre den unterschied zwischen synchronen aufrufen und asynchronen aufrufen und gib beispiele und nenne Vor und Nachteile eines Asynchronen Aufrufs': 'ablauf synchroner aufruf:\n' +
      '1. client fordert ressource\n' +
      '2. server bearbeitet methode, client schläft\n' +
      '3. server liefert ergebnis\n' +
      '4. client setzt arbeit fort\n' +
      '\n' +
      'synchrone aufrufe benuten, wenn:\n' +
      'aufgerufene methode nur kurz läuft und schnell ergebnis liefert\n' +
      'client ohne ergebnis nicht weiterarbeiten kann, ansonsten asynchrone aufrufe verwenden\n' +
      '\n' +
      'ablauf asynchroner aufruf (mit callback)\n' +
      '1. client setzt methodenaufruf ab\n' +
      '2. client wendet sich anderen dingen zu\n' +
      '3. server bearbeitet methode\n' +
      '4. server hat methode fertig abgearbeitet\n' +
      '5. server ruft client zurück (callback)\n' +
      '6. client verarbeitet ergebnis des callbacks\n' +
      '\n' +
      'Vorteile:\n' +
      'client kann weiterarbeiten, ohne zu blockieren oder ständig server anzufragen\n' +
      'wird automatisch zurückgerufen (callback), wenn ergebnis bereit\n' +
      '\n' +
      'Nachteil:\n' +
      'aufwämdige programmierung mit observer pattern',
    'Frage 80: erkläre, was ein promise ist und gib beispiele in Nodejs': 'viele aufrufe in nodejs sind asynchron\n' +
      'vermeiden also blockierende aufrufe\n' +
      'liefern nicht direkt das ergebnis, sondern promise\n' +
      'zugang zu für die zukunft versprochenem ergebnis\n' +
      'ist ein Generic parameterisiert mit datentyp des ergebnisses\n' +
      'reaktion mit promise ergebnis mit .then\n' +
      '\n' +
      'Beispiele:\n' +
      '• MongoClient.connect(DB_URL): Promise MongoClient>\n' +
      '• dbProfessorCollection.find({}).toArray(): Promise T[]>\n' +
      '• dbProfessorCollection.findOne({kuerzel: request.params.id}): Promise T|null>\n' +
      '• dbProfessorCollection.insertOne(newProfessor): Promise InsertOneWriteOpResult>\n' +
      '• dbProfessorCollection.updateOne({kuerzel: request.params.id}, {$set:\n' +
      'updateJSONDoc}): Promise UpdateWriteOpResult>\n' +
      '• dbProfessorCollection.deleteOne({kuerzel: request.params.id})\n' +
      'Promise DeleteWriteOpResultObject>',
    'Frage 81: erkläre das Observer Pattern und gib beispiele in unserem angular service client': 'Observer Pattern:\n' +
      'mehrere Beobachter (Observer) sind von einem Subjekt abhängig\n' +
      'müssen über änderungen am Subjekt informiert werden (aktualisieren)\n' +
      '\n' +
      'anwendungsbeispiele: alle darstellungen aktuell halten, wenn subjekt mehrfach grafisch dargestellt\n' +
      'Beispiel Ordner und Listenansicht im Dateisystemexplorer (oder anders gesagt: wenn man einen Ordner ändert, \n' +
      'soll er in allen darstellungsarten aktuallisiert werden, egal ob Baumdarstellung, Tabellendarstellung usw)\n' +
      '\n' +
      'Observer Pattern im code:\n' +
      'besteht aus 2 teilen:\n' +
      '\n' +
      'Subjekt, Publisher:\n' +
      'beobachtbares Objekt\n' +
      'unterhält liste aller seiner beobachter\n' +
      'benachrichtigt bei änderungen alle seine beobachter\n' +
      '\n' +
      '\n' +
      '& Beobachter (observer, subscriber):\n' +
      'registrieren sich beim Subjekt (bekommen also änderungsmeldungen des subjekts)\n' +
      'stellen aktualisierungsschnittstelle bereit\n' +
      '\n' +
      'als Klassendiagramm:\n' +
      '\n' +
      '\n' +
      'klasse Subjekt:\n' +
      '- beobachterListe: List Beobachter>\n' +
      '+registriere(beobachter: Beobachter):void\n' +
      '+enferne(beobachter: Beobachter):void\n' +
      '+benachrichtige():void\n' +
      '+gibZustand():Zustand\n' +
      '\n' +
      'interface Beobachter:\n' +
      '+aktualisiere(): void\n' +
      '\n' +
      'implementierung des interfaces: KonkreterBeobachter\n' +
      '+aktualisiere(): void\n' +
      '\n' +
      'Vorteile:\n' +
      'Subjekt und Beobachter unabhängig voneinander:\n' +
      'also sehr lose kopplung, subjekt braucht sich nicht um innenleben der Beobachter zu kümmern\n' +
      '\n' +
      'beliebig viele Beobachter zu einem Subjekt\n' +
      'alle Beobachter werden automatsch über änderungen informiert\n' +
      'alle beobachter sind immer auf dem aktuellen Stand\n' +
      '\n' +
      'Nachteile:\n' +
      'performance\n' +
      'änderungsmeldungen belasten das System',
    'Frage 82: Welche schritte muss man im angular client und an der professor service klasse vornehmen, um asynchron mit dem REST nodejs server zu kommunizieren?': '1. HttpClientModule in ProfessorenverwaltungModule importieren\n' +
      '\n' +
      'HttpClientModule:\n' +
      'beinhaltet vollständigen HTTP client:\n' +
      'unterstützt sämtliche HTTP verben: (get, post, put, delete)\n' +
      'HTTP header attribute\n' +
      'URI zerlegung\n' +
      '\n' +
      'komfortable aufruf schnittstelle\n' +
      'ersetzt low level programmierung mit ajax\n' +
      'liefert ergebnisse synchron als Promise Nutzerdatentyp>\n' +
      'programmieraufwand weit geriner, als in java, nutzbar für Zugrif auf RESTful webservices\n' +
      '\n' +
      'in ProfessorenverwaltungModule.ts:\n' +
      'import {HttpClientModule} from "@angular/common/http";\n' +
      '\n' +
      '@NgModule({\n' +
      'declarations: ...\n' +
      'imports: [CommonModule, FormsModule, !HttpClientModule!, RouterModule, LogInOutModule], // neu\n' +
      'exports: ...\n' +
      '})\n' +
      '\n' +
      '\n' +
      '\n' +
      '2. ProfessorService neu implementieren: zugrif auf RESTfulWebservice, methoden liefern nun asynchrones ergebnis\n' +
      '\n' +
      'neue ProfessorService.ts:\n' +
      '\n' +
      'import {Injectable} from "@angular/core";\n' +
      'import {Professor} from "./professor";\n' +
      'import {HttpClient, HttpHeaders} from "@angular/common/http";\n' +
      'import {Observable} from "rxjs"; // Reactive Extensions for JavaScript\n' +
      'const httpHeaders: HttpHeaders = new HttpHeaders({\n' +
      '"Content-Type": "application/json", // Typ der übermittelten Daten\n' +
      '"Accept": "application/json", // Gewünschter Rückgabetyp\n' +
      '"Cache-Control": "no-cache" // Cache deaktivieren\n' +
      '});\n' +
      'const httpOptions = {\n' +
      'headers: httpHeaders\n' +
      '};\n' +
      '\n' +
      '@Injectable({\n' +
      'providedIn: "root"\n' +
      '})\n' +
      'export class ProfessorService {\n' +
      'private restServiceUrl = "http://localhost:8080/professor";\n' +
      'constructor(private http: HttpClient) { }\n' +
      'create(professor: Professor): Observable Professor> {\n' +
      'const url = "${this.restServiceUrl}";\n' +
      'return this.http.post Professor>(url, professor, httpOptions);\n' +
      '}\n' +
      '\n' +
      'getProfessoren(): Observable Professor[]> {\n' +
      'return this.http.get Professor[]>(this.restServiceUrl, httpOptions);\n' +
      '}\n' +
      'getProfessor(id: string): Observable Professor> {\n' +
      'const url = "${this.restServiceUrl}/${id}";\n' +
      'return this.http.get Professor>(url, httpOptions);\n' +
      '}\n' +
      'update(professor: Professor): Observable Professor> {\n' +
      'const url = "${this.restServiceUrl}/${professor.kuerzel}";\n' +
      'return this.http.put Professor>(url, professor, httpOptions);\n' +
      '}\n' +
      'delete(professorToDelete: Professor): Observable Professor> {\n' +
      'const url = "${this.restServiceUrl}/${professorToDelete.kuerzel}";\n' +
      'return this.http.delete Professor>(url);\n' +
      '}\n' +
      '}\n' +
      '\n' +
      '3. GUI Komponenten auf asynchronen ProfessorService Zugriff umbauen\n' +
      '\n' +
      'geänderte ProfessorenListeComponent:\n' +
      '\n' +
      'getProfessoren(): void {\n' +
      'this.professorService.getProfessoren().subscribe(\n' +
      '(profs: Professor[]) => this.professoren = profs);\n' +
      '}\n' +
      '\n' +
      'delete(professor: Professor): void {\n' +
      'if (confirm("Professor ${professor.vorname} ${professor.nachname} wirklich löschen?")) {\n' +
      'if (this.selektierterProfessor &&\n' +
      'professor.kuerzel === this.selektierterProfessor.kuerzel) {\n' +
      'this.selektierterProfessor = undefined;\n' +
      '}\n' +
      'this.professorService.delete(professor).subscribe(\n' +
      '(prof: Professor) => this.getProfessoren());\n' +
      '}\n' +
      '}\n' +
      '\n' +
      '\n' +
      'geänderte ProfessorErstellenComponent:\n' +
      '\n' +
      'save(professor: Professor): void {\n' +
      'this.professorService.create(this.professor).subscribe(\n' +
      '(prof: Professor) => {\n' +
      'this.aenderungenGespeichert = true;\n' +
      'this.router.navigate(["../"], {relativeTo: this.route});\n' +
      '}\n' +
      ');\n' +
      '}\n' +
      '\n' +
      '\n' +
      'geänderte ProfessorAendernComponent:\n' +
      '\n' +
      'ngOnInit() {\n' +
      'const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;\n' +
      'const kuerzel: string | null = routeSnapshot.params["kuerzel"];\n' +
      'if (kuerzel) {\n' +
      'this.professorService.getProfessor(kuerzel).subscribe(\n' +
      '(professor: Professor) => {\n' +
      'if (professor) {\n' +
      'this.oriProfessor = professor;\n' +
      'this.professor = cloneProfessor(this.oriProfessor);\n' +
      '} else {\n' +
      'this.router.navigateByUrl("/list");\n' +
      '}\n' +
      '}\n' +
      ');\n' +
      '} else {\n' +
      'this.router.navigateByUrl("/list");\n' +
      '}\n' +
      '}\n' +
      '\n' +
      'update(professor: Professor): void {\n' +
      'this.professorService.update(professor).subscribe(\n' +
      '(prof: Professor) => {\n' +
      'this.aenderungenGespeichert = true;\n' +
      'this.router.navigate(["../../"], {relativeTo: this.route});\n' +
      '}\n' +
      ');\n' +
      '}\n' +
      '\n' +
      'geänderte ProfessorAendern.component.html:\n' +
      '\n' +
      'input [(ngModel)]="professor.kuerzel" id="kuerzel" placeholder="kuerzel"readonly="readonly"> // kuerzel muss readonly sein, weil primärschlüssel/id in mongoDB\n',
    'Frage 83: wofür brauchen wir den HTTP client in angular?': 'wir brauchen ihn, damit der Client mit dem REST server kommunizieren kann, als schnittstelle, um die HTTP verben/methoden zu implementieren (get,post, put delete)',
    'Frage 84: was bedeutet MEAN?': 'MEAN = Mongo, Express, Angular, Nodejs, beliebte kombination von Frameworks, um RESTfulwebservices zu implementieren'
  };
  private keyLaenge: number;
  private frage: string;

  private alteFrage: number;
  ngOnInit() {
    this.naechsteFrage();

  }

  leseFrage(): void {
    // gibt ein string array zurück, mit allen keys, damit man die Länge ermitteln und nach keys per index suchen kann
    const keys: string[] = Object.keys(this.alleFragen);
    let next: number = this.alteFrage;
    this.keyLaenge = keys.length;
    // ist notwendig, weil sonst bei einer länge von 2 (also im vorletzten Durchlauf) die Schleife niemals enden würde
    if ( this.keyLaenge > 2) {
      // damit nicht die gleiche Frage nochmal kommt und der Benutzer denkt, es passiert nichts
      while (next === this.alteFrage) {
        // berechnet zufälligen Index aller noch übrigen Fragen, um dem Benutzer eine Zufällige Frage zu präsentieren
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
    // this.frage ist undefined, wenn keine Frage mehr übrig ist, also hat der Benutzer alle Fragen korrekt beantwortet
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
