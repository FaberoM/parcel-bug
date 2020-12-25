import 'normalize.css'; //If link background-color is transparent, this loaded last.
import './styles/blue.css'; //If link background-color is blue, this loaded after main.scss!
import './styles/main.scss'; // Comes last and sets the <a> element background color to red (which it should be).