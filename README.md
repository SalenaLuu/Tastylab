Version 1.0

# π₯ Welcome to Tastylab π₯
πππππππππππππππππππππππππππππππππππ
## π Concept π

### What is Tastylab?π€

+ π₯**Tastylab**π₯ is a platform where you can *easily* find new recipe inspirations.
  You can also πshare your π**favorite recipe**π with the ***community*** and π***win vouchers*** *π for
  popular eventsβ.

### New day and don't know what you like to eat?π

+ Use ***"Lizzy"*** the food **program**π€ to search for a recipe **based on your fridge**.
  So what are you waiting for?!π

##  π API Design π
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14005996-7b14cfb8-2158-43ca-8f24-545be03abce1?action=collection%2Ffork&collection-url=entityId%3D14005996-7b14cfb8-2158-43ca-8f24-545be03abce1%26entityType%3Dcollection%26workspaceId%3Dd407fb37-3eb7-4d42-bf97-96e77786073e)

#### swagger: http://localhost:8080/swagger-ui/index.html
###### (note: replace port, if needed)
### πͺ MemberController πͺ
> ***Parent-Path*** : "/api/member"
> ___
>>   **PUT**  ~ Request Payload(MemberRequest)
>>
>>   *Path* βΉ ""
>>   
>>   *HttpStatus* βΉ 200 Ok
>>
>>   *Authorized* βΉ only Blogger
>>
>>   *Description* βΉ this endpoint *update* user data and *return* MemberDTO
> ___
>>   **DELETE**
>> 
>>   *Path* βΉ "/{memberId}"
>>
>>   *HttpStatus* βΉ 404 Not Found
>>
>>   *Authorized* βΉ only Blogger
>>
>>   *Description* βΉ this endpoint *delete* member.

### πͺ WelcomeController πͺ
> ***Parent-Path*** : "/api/welcome"
> ___
>>  **POST** ~ Request Payload(RegistrationRequest)
>>
>>   *Path* βΉ "/signup"
>>
>>   *HttpStatus* βΉ 200 Ok
>>
>>   *Authorized* βΉ everyone
>>
>>   *Description* βΉ this endpoint *sends* a form to create new member.
> ___
>>  **POST**
>>
>>   *Path* βΉ "/login?username=""&password"" "
>>
>>   *HttpStatus* βΉ 200 Ok
>>
>>   *Authorized* βΉ only Blogger
>>
>>   *Description* βΉ this endpoint *sends* login data and *return* a valid token.
> ___
>>   **GET**
>>
>>   *Path* βΉ "/refresh-token"
>>
>>   *HttpStatus* βΉ 200 Ok
>>
>>   *Authorized* βΉ only Blogger
>>
>>   *Description* βΉ this endpoint *sends* the username & password to authenticate.

### πͺ RecipeController πͺ
> ***Parent-Path*** : "/api/recipe"
> ___
>>   **POST** ~ Request Payload(RecipeRequest)
>>
>>   *Path* βΉ ""
>>
>>   *HttpStatus* βΉ 201 Created
>>
>>   *Authorized* βΉ BLOGGER
>>
>>   *Description* βΉ this endpoint *creates* a recipe.
> ___
>>   **GET**
>>
>>   *Path* βΉ "/home?page=0,0&size=3,3" 
>>   
>>   *HttpStatus* βΉ 200 Ok
>>
>>   *Authorized* βΉ BLOGGER
>>
>>   *Description* βΉ this endpoint *sends* two pages for the home area.
> ___
>>   **GET**
>>
>>   *Path* βΉ "/{username}?page=0&size=3"
>>   
>>   *HttpStatus* βΉ 200 Ok
>>
>>   *Authorized* βΉ BLOGGER
>>
>>   *Description* βΉ this endpoint *sends* the member recipe.
> ___
>>   **POST**
>>
>>   *Path* βΉ "/lizzy?foods=Apple,Butter&page=0&size=3"
>>
>>   *HttpStatus* βΉ 200 Ok
>>
>>   *Authorized* βΉ everyone
>>
>>   *Description* βΉ this endpoint *search* a recipe based on the given foods.
