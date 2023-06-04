import { LinkedList } from "./LinkedList.js";

const linkedList = new LinkedList();
const clearList = new LinkedList();

linkedList.append('foo');
linkedList.append('bar');
linkedList.append('foobar');
console.log('%cindex.js line:6-8 linkedList.append("...")', 'color: #007acc;', linkedList);

linkedList.prepend('barfoo');
console.log('%cindex.js line:11 linkedList.prepend("...")', 'color: #007acc;', linkedList);

console.log('%cindex.js line:14 linkedList.find("foo")', 'color: #007acc;', linkedList.find('foo'));
console.log('%cindex.js line:15 linkedList.find("bar")', 'color: #007acc;', linkedList.find('bar'));
console.log('%cindex.js line:16 linkedList.find("foobar")', 'color: #007acc;', linkedList.find('foobar'));
console.log('%cindex.js line:17 clearList.find("foo")', 'color: #007acc;', clearList.find('anything'));
console.log('%cindex.js line:18 linkedList.find("i dont exist")', 'color: #007acc;', linkedList.find('i dont exist'));

console.log('%cindex.js line:20 linkedList.toArray()', 'color: #007acc;', linkedList.toArray());

linkedList.insertAfter("bar", "barbar");
console.log('%cindex.js line:22 linkedList.insertAfter("bar", "barbar")', 'color: #007acc;', linkedList);

linkedList.append('bar');
linkedList.append('bar');
linkedList.append('bar');
linkedList.append('bar');
linkedList.append('bar');
linkedList.remove("bar")
console.log('%cindex.js line:30 linkedList.remove("bar")', 'color: #007acc;', linkedList);