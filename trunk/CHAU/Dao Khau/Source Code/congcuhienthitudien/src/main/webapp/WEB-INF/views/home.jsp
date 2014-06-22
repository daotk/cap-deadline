<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:if test="${empty isredirect}">
	<%
	String ua=request.getHeader("User-Agent").toLowerCase();
	if(ua.matches("(?i).*((android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino).*")||ua.substring(0,4).matches("(?i)1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-")) {
	  response.sendRedirect("mobile");
	  return;
	}
	%>
</c:if>
<?xml version="1.0" encoding="utf-8" ?>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"  %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://ckeditor.com" prefix="ckeditor" %>
<%@ page language="java" contentType="text/html; charset=utf-8"  pageEncoding="utf-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="./images/logo-browser.ico" rel="shortcut icon" type="image/x-icon" />  
	<title>Hỏi - Đáp</title>
	<!-- CSS -->
	<link rel="stylesheet" href="css/bootstrap.css"/>
	<link rel="stylesheet" href="css/styles.css"/>
	<link rel="stylesheet" href="images/bootstrap/css/jquery.msgbox.css"/>
	<!-- Java Script -->
	<script src='js/jquery.min.js' type='text/javascript'></script>

	
	<!-- Setting pop box -->
	<script src='js/popbox.js' type='text/javascript'></script>
	
	<!-- Paging -->
    <script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
	<script src="js/bootstrap-paginator.js"></script>
	<script type="text/javascript" src="js/jquery.msgbox.js"></script>	
	
<script type="text/javascript">
	$(document).ready(function(){
		var noOfPages = '${noOfPages}'; 
		var page = location.search.split("page=")[1];
		if(noOfPages>=1){
			if(page != null){
				var options = {
				currentPage: page,
				totalPages: noOfPages,
				 size:'normal',
				 alignment:'center',
				 numberOfPages:10,
				 useBootstrapTooltip:true,
				pageUrl: function(type, page, current){
					return "?page="+page;
				}
			}
			$('#paginator').bootstrapPaginator(options);    
			}else{
				var options = {
					currentPage: 1,
					totalPages: noOfPages,
					 size:'normal',
					 alignment:'center',
					 numberOfPages:10,
					 useBootstrapTooltip:true,
					pageUrl: function(type, page, current){
						return "?page="+page;
					}
				}
				$('#paginator').bootstrapPaginator(options); 
			}
		}
		return false;
		});
	
	
</script>

<script>
$(document).ready(function() {
    $('#list_dictionary h2').click(function() {
    	$(this).next('.answer').fadeToggle(550);      
    });
}); // end ready
</script>
<!-- LIMIT TExt filed to accept only numbers as input -->
	<script>
	 function isNumberKey(evt)
     {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
           return false;

        return true;
     }
	</script>

</head>
<body>
<tiles:insertDefinition name="defaultTemplate">
    <tiles:putAttribute name="body">
		<table style="height: 100%;width: 100%;">
			<tr> 
				<td style="background-color: #ffffff; width: 350px; height:100%" valign="top">
					<!-- search and setting -->					
					<div id="tfheader" style="width: 100%;display: block; margin-top: 3%;">
						<!-- Search -->
						<div id="search" style="width: 100%; height:100%;display: inline;">
							<form id="tfnewsearch" method="post" action="./">
								<label >
								<div style="width:100%; float: left;">
									<span style="margin-left: 3%; margin-top:5px; width: 10%; float:left;">Tìm kiếm: </span>
									<c:if test="${empty curentkeyword}">
										<input name="actionsubmit" style="font-size:10pt; width: 68%; float:left;" type="search" class="search-term" placeholder="Nhập từ khóa cần tìm kiếm"> 
									</c:if>
						 			<c:if test="${not empty curentkeyword}">
										<input name="actionsubmit" style="font-size:10pt; width:68%; float:left;" type="search" class="search-term" placeholder="Nhập từ khóa cần tìm kiếm" value ="${curentkeyword}"> 
									</c:if>
									<button class="button" type="submit"  style=" margin-bottom: 10px; margin-left: 5px; width: 10%; height: 30px; float:left;">Tìm kiếm</button>
									<div id="container-pop" style="width: 5%; float:left;">
										<a class="popup-link-1" style="text-decoration: none;">
											<img src="images/setting.png" style=" margin-left: 5px; margin-bottom: 10px;" />
										</a>
									</div> <!-- end configuration -->
								</div>
								</label>
								
							</form>
						</div>
						<!-- End search -->
						
					  	<!-- configuration pop-up -->
					  	<div class="popup-box" id="popup-box-1">
					  		<div class="close"><img src="images/close1.png" style="border: 0; margin-right: 5px; margin-top: 5px" /></div>
					  		<div class="top">
					  		<form method="post" action="./" style="text-align: center;">
					  			<table>
					  				<tr>
					  					<td><label style="width: 160px; display: inline; padding-right: 10px;">Số mục hiển thị:</label></td>
					  					<td><input style="width: 220px; height: 30px; display: inline; margin-top: 6%;" type="text" name="setting" placeholder="${testrecord}"  value ="${testrecord}" onkeypress="return isNumberKey(event)"></input></td>
					  				</tr>
					  				<tr>
					  					<td></td>
					  					<td><button class="buttoncontrol" id="change" type="submit"  name="actionsubmit" value="settingrecord" style="float: right;">Lưu</button></td>
					  				</tr>
					  			</table>
					  			</form>
							</div>
						</div>
						<div id="blackout"></div>
						<!-- end configuration pop-up -->
					
					</div>	
					
					<c:if test="${not empty note}">
						<center><span class="error">${note}</span></center>
					</c:if>
					
					<!-- list question -->
					<div style="float: left; width: 100%;display: block;">
						<!-- title -->
						<div style="height: 3%;float: left; width: 100%;">
							<p style="font-size: 13pt; font-weight: bold; margin-left: 20px;color:rgb(100,150,200);">Hỏi - đáp</p>
						</div>
						<span style="margin-left: 20px;">
								<c:if test="${not empty result}">
									${result}
								</c:if>
						</span>
						<!-- list dictionary -->
						<div style="height: 88%;float: left; width: 100%;">
							<form>
								<div>
								<c:forEach var="Questionmanagement" items="${listdictionary}" >
									<a href="${pageContext.request.contextPath}/?record=${curentrecord}" style ="text-decoration: none;"></a>
									<section id="list_dictionary">
										<h2 class="question">
											Câu hỏi ${Questionmanagement.ID}
											<br/> ${Questionmanagement.question}
										</h2>
										<div class="answer" style="font-size: 12px; margin-top: 5px; margin-left: 25px; text-align: justify; width: 95%;">
											<span style="font-weight: bold;">Trả lời</span><BR />
											<p style="text-align: justify;">
												<SPAN style="font-size: 12px; font-family: Arial;">
													${Questionmanagement.anwser}
												</span>
											</p>
										</div>
										<hr />
									</section >
								</c:forEach>
								</div>
							</form>
						</div>
						<!-- End list dictionary -->
					
						<!-- Paging -->
						<div id="paginator" style="width: 100%; height: 100%; float: left;"></div>
						<!-- End paging -->					
					</div>
					
					<!-- Send question -->
					<div style="float: left; width: 100%;display: block;">
						<div style="width: 100%; height: 8%; float: left;">
							<span style="font-size: 13pt; font-weight: bold; margin-left: 20px; color:rgb(100,150,200);">Gửi câu hỏi của bạn!</span>
						</div>
						<div style="width: 90%; margin-left: 10%;">
							
							<table style="width: 90%; float: left;">						
								<form:form commandName ="question" id ="newquestion" action="./" method="post">
									<tr>
										<td style="width: 25%;"></td>
										<td style="float: right">
											<c:if test="${not empty error}">
												<script type="text/javascript">
													var mess = '${error}';
													$.msgbox({
														type: 'error',
														content: mess,
														title: 'Thất bại'
													});
												</script>
											</c:if>	
							
											<c:if test="${not empty warning}">
												<script type="text/javascript">
													var mess = '${warning}';
													$.msgbox({
														type: 'warning',
														content: mess,
														title: 'Cảnh báo'
													});
												</script>
											</c:if>	
											</div>
											<c:if test="${not empty message}">
												<script type="text/javascript">
													var mess = '${message}';
								        				$.msgbox({
														type: 'success',
														content: mess,
														title: 'Thành công'
													});
							        			</script>
						        			</c:if>	
										</td>
									</tr>
									<tr>
										<td style="width: 25%;"><span style="font-size: 80%;">Họ tên của bạn</span></td>
										<td><form:input path="QuestionBy" type="text" style="width: 90%; height: 25px; font-size: 10pt; margin-top: 4px; margin-left: 10px;"  placeholder="Họ tên của bạn!"/></td>
									</tr>
									<tr>
										<td></td>
										<td style="font-size: 80%;"><form:errors path="QuestionBy" style="margin-left: 10px;" cssClass="error"/></td>
									</tr>
									<tr>
										<td><span style="font-size: 80%;">Email của bạn</span></td>
										<td><form:input path ="QuestionEmail" type="text" style="width: 90%; height: 25px; font-size: 10pt; margin-top: 4px; margin-left: 10px;" placeholder="Email của bạn!"/></td>
									</tr>
									<tr>
										<td></td>
										<td style="font-size: 80%; margin-left: 10px;"><form:errors path="QuestionEmail" style="margin-left: 10px;" cssClass="error"/></td>
									</tr> 
									<tr>
										<td valign="top"><span  style="font-size: 80%;">Nội dung câu hỏi của bạn</span></td>
										<td><form:textarea path ="Question" type="text" style="width: 90%; height: 200px; font-size: 10pt; margin-left: 10px;  margin-top: 2px;" placeholder="Nội dung câu hỏi của bạn!"/></td>
									</tr>
									<tr>
										<td></td>
										<td style="font-size: 80%;"><form:errors path="Question" style="margin-left: 10px;" cssClass="error" /></td>
									</tr>
									<tr>
										<td>&nbsp;</td>
									</tr>
									<tr>
										<td>&nbsp;</td>
										<td><button class="button" type="submit"  name="actionsubmit" value="register" style="margin-top: 2%; float: right; margin-right: 8%;">Gửi câu hỏi</button></td>
									</tr>
									<tr>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
								</form:form>
						</table>						
						</div>
					</div>
					<!-- End send question -->
				</td>
			</tr>
		</table>
	</tiles:putAttribute>	
</tiles:insertDefinition>
</body>
</html>
