//> using scala "3.2.1"
//> using lib "org.planet42::laika-core:0.19.0"
//> using lib "org.planet42::laika-io:0.19.0"

import laika.api.*
import laika.format.*
import laika.io.implicits.*
import laika.markdown.github.GitHubFlavor
import laika.parse.code.SyntaxHighlighting
import cats.effect.IO
import laika.helium.Helium
import cats.effect.unsafe.implicits.global
import laika.ast.Path
import laika.io.model.InputTree
import laika.io.model.DirectoryInput
import laika.ast.Path.*

val theme = Helium.defaults.build

val transformer =
  Transformer
    .from(Markdown)
    .to(HTML)
    .using(
      GitHubFlavor,
      SyntaxHighlighting
    )
    .sequential[IO]
    .withTheme(theme)
    .build


val html =
  transformer.use(_.fromDirectory("./").toDirectory("./build").transform)

html.unsafeRunSync()
