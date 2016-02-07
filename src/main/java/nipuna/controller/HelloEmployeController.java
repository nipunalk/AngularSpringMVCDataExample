package nipuna.controller;

import nipuna.model.Employee;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class HelloEmployeController {
	
	/*@RequestMapping(value="test")
	public ModelAndView test(){
		return new ModelAndView("test","command",new User());
		
	}*/
	  @RequestMapping(method = RequestMethod.GET)
	    public String getIndexPage() {
	        return "IndexEmployee";
	    }

	
	
	/*@RequestMapping(value="addUser", method=RequestMethod.POST)
	public String addUser(@ModelAttribute("SpringWeb")User usr,Model model){
		model.addAttribute("name", usr.getName());
	      model.addAttribute("age", usr.getAge());
		System.out.println(usr.getName()+ "...........................");
		return "user";
		
	}*/

}
