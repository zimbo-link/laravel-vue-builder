<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(1)->create();

        $document = [
            'id'=> 1,
            'json'=>'{
                "items": [
                    {
                        "id": "2a4da37f-b15e-471d-a866-5c01172e415e",
                        "cls": "main",
                        "css": " #g-2a4da37f-b15e-471d-a866-5c01172e415e .main {\nmargin-top: 30px;\npadding-top: 30px;\npadding-bottom: 30px;\npadding-left: 11em;\nfont-family: Georgia, \"Times New Roman\", Times, serif;\ncolor: purple;\nheight:100%;\nbackground-color: #d8da3d\n}\n\n  #g-2a4da37f-b15e-471d-a866-5c01172e415e ul.navbar {\nlist-style-type: none;\npadding: 0;\nmargin: 0;\nposition: absolute;\ntop: 2em;\nleft: 1em;\nwidth: 9em\n}\n\n #g-2a4da37f-b15e-471d-a866-5c01172e415e h1 {\nfont-family: Helvetica, Geneva, Arial, SunSans-Regular, sans-serif\n}\n  ",
                        "html": "<!-- Main content -->\n<h1>My first styled page</h1>\n\n<p>Welcome to my styled page!</p>\n\n<p>It lacks images, but at least it has style.\nAnd it has links, even if they don\'t go\nanywhere&hellip;</p>\n\n<p>There should be more here, but I don\'t know what yet.</p>\n\n<!-- Sign and date the page, it\'s only polite! -->\n<address>Made 5 April 2004<br>\n  by myself.</address>",
                        "less": "",
                        "scss": "",
                        "class": "",
                        "items": [
                            {
                                "id": "834118cf-5fa8-42fd-b95d-c29f8b999b67",
                                "cls": "navigation",
                                "css": " #g-834118cf-5fa8-42fd-b95d-c29f8b999b67 ul.navbar li {\nbackground: white;\nwidth:100%;\nmargin: 0.5em 0;\npadding: 0.3em;\nborder-right: 1em solid black;\n}\n #g-834118cf-5fa8-42fd-b95d-c29f8b999b67 ul.navbar a {\ntext-decoration: none \n}\n #g-834118cf-5fa8-42fd-b95d-c29f8b999b67 a:link {\ncolor: blue;\n}\n #g-834118cf-5fa8-42fd-b95d-c29f8b999b67 a:visited {\ncolor: purple\n}",
                                "html": "<!-- Site navigation menu -->\n<ul class=\"navbar\">\n  <li><a href=\"#\">Home page</a>\n  <li><a href=\"#\">Musings</a>\n  <li><a href=\"#\">My town</a>\n  <li><a href=\"#\">Links</a>\n</ul>",
                                "less": "",
                                "scss": "",
                                "class": "",
                                "items": [],
                                "style": "ul.navbar li {\nbackground: white;\nwidth:100%;\nmargin: 0.5em 0;\npadding: 0.3em;\nborder-right: 1em solid black;\n}\nul.navbar a {\ntext-decoration: none \n}\na:link {\ncolor: blue;\n}\na:visited {\ncolor: purple\n}"
                            }
                        ],
                        "style": ".main {\nmargin-top: 30px;\npadding-top: 30px;\npadding-bottom: 30px;\npadding-left: 11em;\nfont-family: Georgia, \"Times New Roman\", Times, serif;\ncolor: purple;\nheight:100%;\nbackground-color: #d8da3d\n}\n\n ul.navbar {\nlist-style-type: none;\npadding: 0;\nmargin: 0;\nposition: absolute;\ntop: 2em;\nleft: 1em;\nwidth: 9em\n}\n\nh1 {\nfont-family: Helvetica, Geneva, Arial, SunSans-Regular, sans-serif\n}\n  "
                    }
                ],
                "compiler": "CSS"
            }', 
        ];

        \App\Models\Document::create($document); 
    }
}
