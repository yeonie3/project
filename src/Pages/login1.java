@Controller
public class LoginController {

    @GetMapping("/login")
    public String showLoginPage(HttpSession session) {
        if(session.getAttribute("UserId") != null) {
            return "redirect:/list";
        }
        return "login";
    }

    @PostMapping("/loginProcess")
    public String processLogin(@RequestParam("user_id") String userId,
                               @RequestParam("user_pw") String userPw,
                               HttpSession session,
                               Model model) {
        if(userId.equals("admin") && userPw.equals("1234")) {
            session.setAttribute("UserId", userId);
            session.setAttribute("UserName", "관리자");
            return "redirect:/list";
        } else {
            model.addAttribute("errorMsg", "아이디와 패스워드를 확인하세요.");
            return "login";
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login";
    }
}
