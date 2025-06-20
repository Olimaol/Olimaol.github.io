Website generated with quarto

_quarto.yml: general structure and configuration file
index.qmd: main page of the website
cv.qmd: CV page
research.qmd: research page, for diffrent research topics articles are automatically imported and used for listings, imports from "publications/.../**.qmd" and only articels are shown which is defined in "./ejs/articles_short.ejs"
publications.qmd: publications page, all publications from "publications/.../**.qmd" are imported and shown, the template is defined in "./ejs/articles.ejs"

To generate the website, run the following command in the terminal:
```bash
quarto render .
```

To publish the website on github (using gh-pages branch), run:
```bash
quarto publish gh-pages .
```

After updating the gh-pages branch in the Olimaol (oli_maith@gmx.de) account upate the fork in the Oliver Maith (oliver_maith@gmx.de) account