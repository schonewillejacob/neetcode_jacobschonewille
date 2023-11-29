//Status: Accepted
/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s: string): boolean {
    let bracketStack:string[] = [];
    let validity:boolean = true;

    for (let bracketNext of s) {
        switch(bracketNext) {
            case '{': {
                bracketStack.push('{');
                break;
                }
            case '[': {
                bracketStack.push('[');
                break;
                }
            case '(': {
                bracketStack.push('(');
                break;
            }
            case '}': {
                if (bracketStack.pop() !== '{') {
                    validity = false;
                    break;
                }
                break;

            }
            case ']': {
                if (bracketStack.pop() !== '[') {
                    validity = false;
                    break;
                }
                break;
            }
            case ')': {
                if (bracketStack.pop() !== '(') {
                    validity = false;
                    break;
                }
                break;
            }
            default: 
                console.log(`Invalid character: ${bracketNext}`);
        }
        if (!validity) break;
    }

    if (bracketStack.length !== 0) validity = false;
    return validity
};