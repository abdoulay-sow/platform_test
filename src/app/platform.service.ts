import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';


enum SupportedLanguage {
  En,
  Fr,
  Ar
}

export interface Platform {
  defaultLanguage: string,
  source: string,
  subdomain: string
  theme?: {
    favicon?: string
    logo?: string
    primaryColor?: string
    secondaryColor?: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  platform: Platform | null = null;

  setPlatform(platform: Platform) {
    this.platform = platform;
  }

  getPlatform() {
    return this.platform;
  }

  constructor(private apollo: Apollo) {
    const aa: SupportedLanguage = SupportedLanguage["En"]
  }

  createPlatform(domain: string, lang: string) {

    let CREATE_PLATFORM: DocumentNode | null = null;

    if (lang === "En") {
      CREATE_PLATFORM = gql`
      mutation createPlatform {
        createPlatform(platformInput: {subdomain: "${domain}", defaultLanguage: En}){
          subdomain
          source
          defaultLanguage
          theme {
            primaryColor
            secondaryColor
            logo 
            favicon
          }
        } 
      }
    `
    } else if (lang === "Fr") {
      CREATE_PLATFORM = gql`
      mutation createPlatform {
        createPlatform(platformInput: {subdomain: "${domain}", defaultLanguage: Fr}){
          subdomain
          source
          defaultLanguage
          theme {
            primaryColor
            secondaryColor
            logo 
            favicon
          }
        } 
      }
    `
    } else if (lang === "Ar") {
      CREATE_PLATFORM = gql`
      mutation createPlatform {
        createPlatform(platformInput: {subdomain: "${domain}", defaultLanguage: Ar}){
          subdomain
          source
          defaultLanguage
          theme {
            primaryColor
            secondaryColor
            logo 
            favicon
          }
        } 
      }
    `
    }

    if (CREATE_PLATFORM === null) return new Promise((val) => null);

    return this.apollo.mutate({
      mutation: CREATE_PLATFORM
    })
      .toPromise()
      .then((data: any) => data)
      .catch(() => false)
  }

  isDomainExist(domain: string) {
    const DOMAIN_EXIST = gql`
      query subDomainExists {
        subDomainExists(subdomain: "${domain}") 
      }
    `

    return this.apollo.watchQuery({
      query: DOMAIN_EXIST
    }).result().then((res: any) => {
      return res.data;
    }).catch(() => false)
  }

  isMyDomainExist(domain: string) {
    const DOMAIN_EXIST = gql`
      query fetchMyPlatform {
        fetchMyPlatform(subdomain: "${domain}") {
          subdomain
          source
          defaultLanguage
          theme {
            primaryColor
            secondaryColor
            logo
            favicon
          }
        }
      }
    `

    return this.apollo.watchQuery({
      query: DOMAIN_EXIST
    }).result().then((res: any) => {
      return res.data;
    }).catch(err => false)
  }

  saveDomain(oldDomain: string, newDomain: string) {
    const UPDATE_DOMAIN = gql`
      mutation updateMyPlatformSubDomain {
        updateMyPlatformSubDomain(updatePlatformSubDomainInput: 
          {oldDomain: "${oldDomain}", newDomain: "${newDomain}"})
      }
    `

    return this.apollo.mutate({
      mutation: UPDATE_DOMAIN
    })
      .toPromise()
      .then((data: any) => data)
      .catch(() => false)
  }

  saveTheme(domain: string, primaryColor : string | null, secondaryColor: string | null) {
     const UPDATE_COLORS = gql`
      mutation updateMyPlatformColors {
        updateMyPlatformColors(
          subdomain: "${domain}",
          platformThemeInput: {primaryColor: "${primaryColor}", secondaryColor: "${secondaryColor}"}
        )
      }
    `

    return this.apollo.mutate({
      mutation: UPDATE_COLORS
    })
      .toPromise()
      .then((data: any) => {
        if (data && data.data && data.data.updateMyPlatformColors)  {
          return data.data.updateMyPlatformColors
        }
        return false
      })
      .catch((err: any) => false)
  }


}

