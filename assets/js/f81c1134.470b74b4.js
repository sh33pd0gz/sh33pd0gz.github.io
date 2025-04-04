"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"leetcode-in-neovim","metadata":{"permalink":"/blog/leetcode-in-neovim","source":"@site/blog/2025-04-06-leetcode-in-the-ide/index.md","title":"Solving LeetCode Problems in NeoVim","description":"I recently came across come CLI tools for LeetCode. There are a few, but","date":"2025-04-06T00:00:00.000Z","tags":[],"readingTime":1.635,"hasTruncateMarker":true,"authors":[{"name":"Nik Kauffman","title":"Software Engineer Extraordinaire","url":"https://github.com/sh33pd0gz","page":{"permalink":"/blog/authors/nikolas"},"socials":{"github":"https://github.com/sh33pd0gz","linkedin":"https://www.linkedin.com/in/nik-kauffman/"},"imageURL":"https://github.com/sh33pd0gz.png","key":"nikolas"}],"frontMatter":{"slug":"leetcode-in-neovim","title":"Solving LeetCode Problems in NeoVim","authors":["nikolas"]},"unlisted":false},"content":"I recently came across come CLI tools for LeetCode. There are a few, but\\nhere is [a link](https://github.com/clearloop/leetcode-cli) to the \\nthe one I\'ve been using. These can be a useful tool in bringing \\nLeetCode problems to your IDE. This gives a few advantages in the\\nData Structures & Algorithms learning process, in my opinion. Some of them\\nbeing:\\n\\n1. Gives the comfort of being in your personalized development environment\\n2. Allows for the use of version control and sharing your solutions (and notes) \\nsomewhere like GitHub.\\n3. Learning new programming languages while developing the tooling for the language to\\ndevelop locally e.g. linting, formatting, running tests, static type-checking, etc.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Picking A Problem and Language Configuration\\n\\nYou can start off any problem before editing code by getting the problem statement\\nby running `leetcode pick <ID>`.\\n\\nIf this is a problem you wish then to solve, get the scaffolded problem LeetCode \\nprovides as a starting point by running `leetcode edit <ID>`.\\n\\nIf you\'ve been solving problems in one language and get bored or want to begin learning\\na new programming language toggle the `lang` variable in the `~/.leetcode/leetcode.toml`\\nfile. That file looks something like this:\\n\\n```toml\\n[code]\\neditor = \\"nvim\\"\\nlang = \\"java\\"\\n\\n[cookies]\\ncsrf = \\"CSRF_TOKEN HERE\\"\\nsession = \\"LEETCODE_SESSION TOKEN GOES HERE\\"\\nsite = \\"leetcode.com\\"\\n\\n[storage]\\ncache = \\"Problems\\"\\ncode = \\"code\\"\\nroot = \\"~/.leetcode\\"\\nscripts = \\"scripts\\"\\n```\\n\\n## Example (in Java)\\n\\nFor this example lets solve an easy one to see this flow in action.\\n\\nI\'ll be using **Length of Last Word (58)** as a nice easy problem using\\nthat falls in the category of _Arrays & Strings_. Here is a screenshot of\\nmy IDE in action\\n\\n![Leetcode 58 Code](./leetcode_58_code.png)\\n\\nAnd then testing and executing that code in my floating terminal window reveals\\nthe simple test cases run to acceptance and executing against the remote\\nproblem grader shows statistics around time and space complexity of the submitted\\nsolutions.\\n\\n![Leetcode 58 Submission](./leetcode_58_exec.png)"}]}}')}}]);