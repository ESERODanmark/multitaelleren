## Multi-tælleren @unplugged
![Image Description](https://newgamedk.github.io/skridt-taeller/intro.png)

## Slet blokkene
* `||basic.når programmet starter||` 
* `||basic.for altid||`

## Ved ryst
* Find blokken `||input.på ryst||`. **TIP:** Tryk på den farvede tekst.

```blocks
input.onGesture(Gesture.Shake, function () {
})
``` 

## Tælle-variablen
Opret en variabel, til at tælle antalRyst skridt med. Kald den `||variables:antalRyst||`.

## Sæt tælle-variablen
Når multi:tælleren rystes, skal den tælle et skridt. 
* Find blokken `||variables: sæt||` og træk den ind i  `||input.på ryst||`    
```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst = 0
})
```



## Sæt tælle-variablen
* Find blokken `||math:0 + 0||` og træk den ind i `||variables: sæt||` 

```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst = 0 + 0
})
```


## Sæt tælle-variablen
* Find blokken `||variables:antalRyst||` og træk den ind i `||math:0 + 0||`
```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst = antalRyst + 0
})
```

## Sæt tælle-variablen
* Udfyld så koden laver regnestykket: 
`||variables:antalRyst||` = `||variables:antalRyst||` + 1
 
```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst = antalRyst + 1
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

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
})
```

## Nulstil multi:tælleren
* Find blokken `||basic.vis nummer||`. Sæt den ind i `||input:når der trykkes på knap A||` under `||variables: sæt||`

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
    basic.showNumber()

})
```

## Nulstil multi:tælleren
* Indsæt variablen `||variables:antalRyst||` i `||basic.vis nummer||`

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
    basic.showNumber(antalRyst)

})
```

## Vis antal ryst
* Indsæt blokken  `||loops:every||`

```blocks
loops.everyInterval(500, function () {
    
})
```

## Vis antal ryst
* Indstil til `||loops:every||` 2000 milisekunder (=2 sekunder)

```blocks
loops.everyInterval(2000, function () {

})
```

## Vis antal ryst
* Indsæt  `||basic.vis nummer||` i `||loops:every||` 
```blocks
loops.everyInterval(2000, function () {
    basic.showNumber()
})
```

## Vis antal ryst
* Sæt variablen `||variables:antalRyst||` ind i `||basic.vis nummer||`
```blocks
loops.everyInterval(2000, function () {
    basic.showNumber(antalRyst)
})
```

## Koden er nu klar til brug!
* Fortsæt med opgaverne i elevarket 