## Multi-tælleren @unplugged
![Image Description](https://newgamedk.github.io/skridt-taeller/intro.png)

## Slet blokkene
* `||basic.når programmet starter||` 
* `||basic.for altid||`

## Ved ryst
* Find blokken `||input.på ryst||`. 
* ** Find blok i menuen ved at trykke på --> ** `||input.på ryst||`

```blocks
input.onGesture(Gesture.Shake, function () {
})
``` 

## Tælle-variablen
Opret en variabel, til at tælle antalRyst skridt med. Kald den `||variables:antalRyst||`.

## Sæt tælle-variablen
Når multi:tælleren rystes, skal den tælle et skridt. Du skal altså lægge 1 til `||variables:antalRyst||`. 
* Find blokken `||variables: sæt||` og træk den ind i  `||input.på ryst||`    
* Find blokken `||math:0 + 0||` og træk den ind i `||variables: sæt||` 
* Find blokken `||variables:antalRyst||` og træk den ind i `||variables: sæt||`
* Udfyld så koden laver regnestykket: 

`||variables:antalRyst||` = `||variables:antalRyst||` + 1
 
```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst = antalRyst + 1
})
```

## Vis talte ryst
Find blokken `||basic.vis nummer||`. Indsæt variablen `||variables:antalRyst||` i `||basic.vis nummer||`
* ** Tip til bloksamling: ** Tryk på den lilla pære 

```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst = antalRyst + 1
    basic.showNumber(antalRyst)
})
```

## Nulstil multi:tælleren
* Find blokken `||input:når der trykkes på knap A||`. 

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## Nulstil multi:tælleren
* Find blokken `||variables: sæt||` og sæt den ind i `||input:når der trykkes på knap A||`
* Sæt `||variables:antalRyst||` = 0

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
})
```

## Koden er nu klar til brug!
* Fortsæt med opgaverne i elevarket 