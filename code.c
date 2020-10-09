#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>


int main(int argc, char **argv) { int pid; int i;

    for (i=0;i<=1;i++)
      {    pid=fork();
           if (pid==0)
          {printf("child %d with pid %d created\n",i,pid);
           exit(0);   }
    
      }
    printf("All children created\n");
    
}