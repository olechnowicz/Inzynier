#include <cstdlib>
#include <iostream>
#include <cstring>
//funkcja formatuj(const napis,ile)
//zwraca w wyniku nowy napis o d³ugoœci  podanej jako argument "ile"
//ile <= d³. napisu - zostawia pierwszych "ile" znaków
// np. formatuj("komputer", 3) - "kom"
//ile > d³. napisu, napis jest uzupelniany kropkami (z przodu)
//  np. formatuj("komputer", 10) - "...komputer"

char *formatuj(const char *,int);
using namespace std;

int main(int argc, char *argv[])
{
    char napis[]="komputer";
    int dl,i,j,dod,ile;
    dl=strlen(napis);
    char *napis1=new char[dl];
    strcpy(napis1,napis);
    ile=5;
    napis1[ile]='\0';
    cout<<napis1;
    //cout<<formatuj(napis,14)<<endl;
        //cout<<formatuj(napis,3)<<endl;
    system("PAUSE");
    return EXIT_SUCCESS;
}
char *formatuj(const char *napis,int ile)
{
     int dl,i,j,dod;
     dl=strlen(napis);
     char *napis1=new char[dl];
     strcpy(napis1,napis);
     if (dl>=ile)
     {
        napis1[ile]='\0';
        return napis1;  
     }   
     if (dl<ile) 
     {
        dod=ile-dl;
        char *kropki=new char[ile];
        for (i=0;i<dod;i++)
            kropki[i]='.';
        kropki[i]='\0';
        strcat(kropki,napis);
        return kropki;
     }
}
