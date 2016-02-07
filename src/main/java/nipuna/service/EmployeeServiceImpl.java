package nipuna.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import nipuna.model.Employee;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service("userService")
@Transactional
public class EmployeeServiceImpl implements EmployeeService{
	
	private static final AtomicLong counter = new AtomicLong();
	
	private static List<Employee> users;
	
	public EmployeeServiceImpl(){}
	
	static{
		users= populateDummyUsers();
	}

	public List<Employee> findAllUsers() {
		return users;
	}
	
	public Employee findById(long id) {
		for(Employee user : users){
			if(user.getId() == id){
				return user;
			}
		}
		return null;
	}
	
	public Employee findByName(String name) {
		for(Employee user : users){
			if(user.getUsername().equalsIgnoreCase(name)){
				return user;
			}
		}
		return null;
	}
	
	public void saveUser(Employee user) {
		user.setId(counter.incrementAndGet());
		users.add(user);
	}

	public void updateUser(Employee user) {
		int index = users.indexOf(user);
		users.set(index, user);
	}

	public void deleteUserById(long id) {
		
		for (Iterator<Employee> iterator = users.iterator(); iterator.hasNext(); ) {
		    Employee user = iterator.next();
		    if (user.getId() == id) {
		        iterator.remove();
		    }
		}
	}

	public boolean isUserExist(Employee user) {
		return findByName(user.getUsername())!=null;
	}
	
	public void deleteAllUsers(){
		users.clear();
	}

	private static List<Employee> populateDummyUsers(){
		List<Employee> users = new ArrayList<Employee>();
		users.add(new Employee(counter.incrementAndGet(),"Sam", "NY", "sam@abc.com"));
		users.add(new Employee(counter.incrementAndGet(),"Tomy", "ALBAMA", "tomy@abc.com"));
		users.add(new Employee(counter.incrementAndGet(),"Kelly", "NEBRASKA", "kelly@abc.com"));
		return users;
	}

}
