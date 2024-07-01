import { Language } from "../vite-env";

const languages = [
    {
        label: "C",
        value: "c",
        script: 
        '#include <stdio.h>\n'+
        'int main() {\n' +
        '   printf("Hello, World!");\n' +
        '   return 0;\n' +
        '}',
    },
    {
        label: "C++",
        value: "cpp",
        script:
        '#include<bits/stdc++.h>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '   cout << "hello world";\n' +
        '   return 0;\n' +
        '}\n',
    },
    {
        label: "Java",
        value: "java",
        script:
        'import java.util.Scanner;\n' +
        'public class Solution {\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println("hello world");\n' +
        '    }\n' +
        '}\n',
    },
    {
        label: "Python",
        value: "python",
        script:
        'print("Hello World!")\n',
    },
    {
        label: "JavaScript",
        value: "javascript",
        script:
        'console.log("Hello World!");\n',
    },
                
] satisfies Language[]

export default languages;