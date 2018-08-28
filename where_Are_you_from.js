// Problem: https://www.codewars.com/kata/57f9f20004d82828c10000cd

function fromWhere(you,me,question){

for (var value in you ) {
    youKey = value, you[value]
    youVal = you[value]
if ( youVal == me[youKey] ) {
        whereAreyouFrom = 'Same as you.'      
    } else {
        whereAreyouFrom = 'I am from ' + me[youKey] + '.'
        break
     }
}

if ( question == 'Where are you from?') {
        
     return whereAreyouFrom
     
        } else if ( question == 'What country are you from?' ) {

                if ( you['Country'] == me['Country']  ) {
                        return 'Same as you.'
                } else {
                        return 'I am from ' + me['Country'] + '.'
                }

        } else if ( question == 'What city are you from?') {

                if ( you['City'] == me['City']  ) {
                        return 'Same as you.'
                } else {
                        return 'I am from '+ me['City'] + '.'
                }
       }  else if ( question == 'What street are you from?') {

                if ( you['Street'] == me['Street']  ) {
                        return 'Same as you.' 
                } else {
                        return 'I am from ' + me['Street'] + '.'
                }
        } else if ( question == 'What province are you from?') {
                if ( you['Province'] == me['Province']  ) {
                        return 'Same as you.' 
                } else {
                        return 'I am from ' + me['Province'] + '.'
                } 
        } else if ( question == 'What town are you from?') {
                if ( you['Town'] == me['Town']  ) {
                        return 'Same as you.' 
                } else {
                        return 'I am from ' + me['Town'] + '.'
                } 
        } else  {
          return 'What are you saying?'
        }
        
}
